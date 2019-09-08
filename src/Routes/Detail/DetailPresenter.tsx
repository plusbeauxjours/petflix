import React, { useState } from "react";
import styled from "styled-components";
import Loader from "../../Components/Loader";
import Message from "../../Components/Message";
import Helmet from "react-helmet";
import countries from "../../countries";

const Container = styled.div`
  height: calc(100vh - 50px);
  width: 100%;
  position: relative;
  padding: 50px;
`;

const Backdrop = styled.div<ITheme>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url(${props => props.bgImage});
  background-position: center center;
  background-size: cover;
  filter: blur(10px);
  opacity: 0.5;
  z-index: 0;
`;

const Content = styled.div`
  display: flex;
  width: 100%;
  position: relative;
  z-index: 1;
  height: 100%;
`;

const Cover = styled.div<ITheme>`
  width: 30%;
  background-image: url(${props => props.bgImage});
  background-position: center center;
  background-size: cover;
  height: 100%;
  border-radius: 5px;
`;

const SeasonContainer = styled.span`
  display: flex;
  margin-top: 5px;
  cursor: pointer;
`;

const Data = styled.div`
  width: 70%;
  margin-left: 10px;
`;

const Title = styled.h3`
  font-size: 32px;
  margin-bottom: 20px;
`;

const ItemContainer = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
`;

const Item = styled.span``;

const Flag = styled.span`
  font-size: 20px;
  margin-right: 5px;
`;

const Divider = styled.span`
  margin: 0 10px;
  &:last-child {
    visibility: hidden;
  }
`;

const Overview = styled.p`
  font-size: 12px;
  opacity: 0.7;
  line-height: 1.5;
  width: 70%;
`;

const Imdb = styled.span`
  font-weight: 800;
  font-size: 14px;
`;

const Space = styled.div`
  margin-bottom: 30px;
`;

const Modal = styled.div`
  background-color: rgba(33, 33, 33, 0.85);
  border: 1px solid rgba(230, 230, 230, 0.95);
  width: 600px;
  border-radius: 1px;
  z-index: 10;
  padding: 30px 10px;
`;

const ModalContainer = styled.div`
  z-index: 8;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  height: 100%;
  width: 100%;
  top: 0;
`;

const ModalOverlay = styled.div`
  z-index: 5;
  height: 100%;
  width: 100%;
  position: fixed;
  top: 0;
  background-color: rgba(33, 33, 33, 0.85);
`;

const SmallTitle = styled.span`
  display: flex;
  font-weight: 400;
  margin-bottom: 10px;
`;

const ToggleCover = styled(Cover)`
  width: 100px;
  height: 150px;
`;

const ToggleOverview = styled(Overview)`
  width: 100%;
`;

const Logo = styled.img`
  height: 40px;
  margin-right: 20px;
  background-color: rgba(250, 250, 250, 1);
`;

const OverviewLine = styled.p`
  text-decoration: underline;
  cursor: pointer;
  font-size: 12px;
  opacity: 0.7;
  line-height: 1.5;
  margin-right: 20px;
`;

const IFrame = styled.iframe`
  z-index: 10;
`;
interface ITheme {
  bgImage: string;
}

interface IProps {
  result: any;
  error: string;
  loading: boolean;
  isMovie: boolean;
  modalOpen: boolean;
  toggleModal: any;
  seasonResult: any;
}

const DetailPresenter: React.FunctionComponent<IProps> = ({
  result,
  loading,
  error,
  isMovie,
  modalOpen,
  toggleModal,
  seasonResult
}) => {
  const [videoOpen, setVideoOpen] = useState(false);
  const [videoUrl, setVideoUrl] = useState();
  return loading ? (
    <>
      <Helmet>
        <title>Loading | Petflix</title>
      </Helmet>
      <Loader />
    </>
  ) : (
    <>
      {videoOpen && (
        <ModalContainer>
          <ModalOverlay onClick={() => setVideoOpen(false)} />
          <IFrame
            width="640"
            height="360"
            src={`http://www.youtube.com/embed/${videoUrl}?autoplay=1&origin=http://example.com`}
          />
        </ModalContainer>
      )}
      {modalOpen && (
        <ModalContainer>
          {console.log(seasonResult)}
          <ModalOverlay onClick={() => toggleModal(null)} />
          <Modal>
            <Content>
              <ToggleCover
                bgImage={
                  seasonResult.poster_path
                    ? `https://image.tmdb.org/t/p/original${seasonResult.poster_path}`
                    : require("../../assets/noPosterSmall.png")
                }
              />
              <Data>
                <ItemContainer>
                  <Item>{result.original_name}</Item>
                  <Divider>•</Divider>
                  <Item>{seasonResult.name && seasonResult.name}</Item>
                  <Divider>•</Divider>
                  <Item>
                    {seasonResult.release_date
                      ? result.release_date.substring(0, 4)
                      : result.first_air_date.substring(0, 4)}
                  </Item>
                  <Divider>•</Divider>
                  <Item>
                    <span role="img" aria-label="rating">
                      ⭐️
                    </span>
                    &nbsp;
                    {result.vote_average}/10
                  </Item>
                </ItemContainer>
                <ToggleOverview>{seasonResult.overview}</ToggleOverview>
              </Data>
            </Content>
          </Modal>
        </ModalContainer>
      )}
      <Container>
        <Helmet>
          <title>
            {result.original_title
              ? result.original_title
              : result.original_name}{" "}
            | Petflix
          </title>
        </Helmet>
        <Backdrop
          bgImage={`https://image.tmdb.org/t/p/original${result.backdrop_path}`}
        />
        <Content>
          <Cover
            bgImage={
              result.poster_path
                ? `https://image.tmdb.org/t/p/original${result.poster_path}`
                : require("../../assets/noPosterSmall.png")
            }
          />
          <Data>
            <Title>
              {result.original_title
                ? result.original_title
                : result.original_name}
            </Title>
            <ItemContainer>
              <Item>
                {result.release_date
                  ? result.release_date.substring(0, 4)
                  : result.first_air_date.substring(0, 4)}
              </Item>
              <Divider>•</Divider>
              {result.runtime && (
                <>
                  <Item>
                    {result.runtime}
                    min
                  </Item>
                  <Divider>•</Divider>
                </>
              )}
              {isMovie && (
                <>
                  <a href={`https://www.imdb.com/title/${result.imdb_id}`}>
                    <Item>
                      <Imdb>IMDb</Imdb>
                    </Item>
                  </a>
                  <Divider>•</Divider>
                </>
              )}
              <Item>
                {result.genres &&
                  result.genres.map((genre, index) =>
                    index === result.genres.length - 1
                      ? genre.name
                      : `${genre.name} / `
                  )}
              </Item>
              <Divider>•</Divider>
              <Item>
                <span role="img" aria-label="rating">
                  ⭐️
                </span>
                &nbsp;
                {result.vote_average}/10
              </Item>
              <Divider>•</Divider>
              {result.production_countries &&
                result.production_countries.map((production_country, index) => (
                  <Flag key={index}>
                    {
                      countries.find(
                        countries =>
                          countries.code === production_country.iso_3166_1
                      ).flag
                    }
                  </Flag>
                ))}
              {result.origin_country &&
                result.origin_country.map((country, index) => (
                  <Flag key={index}>
                    {
                      countries.find(countries => countries.code === country)
                        .flag
                    }
                  </Flag>
                ))}
            </ItemContainer>
            <Overview>{result.overview}</Overview>
            <Space />

            <SeasonContainer>
              {result.seasons &&
                result.seasons.map((season, index) => (
                  <OverviewLine
                    key={index}
                    onClick={() => toggleModal(season.season_number)}
                  >
                    {season.name}
                  </OverviewLine>
                ))}
            </SeasonContainer>
            <Space />
            <SmallTitle>
              {result.production_companies.length === 1
                ? "Production Company"
                : "Production Companies"}
            </SmallTitle>
            {result.production_companies &&
              result.production_companies.map((production_company, index) =>
                production_company.logo_path ? (
                  <Logo
                    key={index}
                    src={
                      production_company.logo_path
                        ? `https://image.tmdb.org/t/p/w200${production_company.logo_path}`
                        : require("../../assets/noPosterSmall.png")
                    }
                  />
                ) : (
                  <Overview key={index}>{production_company.name}</Overview>
                )
              )}
            <Space />
            <SmallTitle>
              {result.videos.results.length === 1 ? "Video" : "Videos"}
            </SmallTitle>
            {result.videos.results.map((result, index) => (
              <OverviewLine
                key={index}
                onClick={() => {
                  setVideoUrl(result.key);
                  setVideoOpen(true);
                }}
              >
                {result.name}
              </OverviewLine>
            ))}
          </Data>
        </Content>
        {error && <Message text={error} />}
      </Container>
    </>
  );
};

export default DetailPresenter;
