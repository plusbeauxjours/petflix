import React from "react";
import styled from "styled-components";
import Section from "../../Components/Section";
import Loader from "../../Components/Loader";
import Message from "../../Components/Message";
import Poster from "../../Components/Poster";

const Container = styled.div`
  padding: 0px 20px;
`;

interface IProps {
  topRated: any;
  popular: any;
  airingToday: any;
  loading: boolean;
  error: string;
}

const TVPresenter: React.FunctionComponent<IProps> = ({
  topRated,
  popular,
  airingToday,
  loading,
  error
}) => {
  if (loading) {
    return <Loader />;
  } else if (!loading && topRated && airingToday && popular) {
    return (
      <Container>
        {console.log(topRated)}
        {topRated && topRated.length > 0 && (
          <Section title="Top Rated Shows">
            {topRated.map(show => (
              <Poster
                key={show.id}
                id={show.id}
                title={show.original_name}
                imageUrl={show.poster_path}
                rating={show.vote_average}
                year={
                  show.first_air_date && show.first_air_date.substring(0, 4)
                }
                isMovie={false}
              />
            ))}
          </Section>
        )}
        {airingToday && airingToday.length > 0 && (
          <Section title="Popular Shows">
            {airingToday.map(show => (
              <Poster
                key={show.id}
                id={show.id}
                title={show.original_name}
                imageUrl={show.poster_path}
                rating={show.vote_average}
                year={
                  show.first_air_date && show.first_air_date.substring(0, 4)
                }
                isMovie={false}
              />
            ))}
          </Section>
        )}
        {popular && popular.length > 0 && (
          <Section title="Airing Today">
            {popular.map(show => (
              <Poster
                key={show.id}
                id={show.id}
                title={show.original_name}
                imageUrl={show.poster_path}
                rating={show.vote_average}
                year={
                  show.first_air_date && show.first_air_date.substring(0, 4)
                }
                isMovie={false}
              />
            ))}
          </Section>
        )}
        {error && <Message text={error} />}
      </Container>
    );
  } else {
    return null;
  }
};

export default TVPresenter;
