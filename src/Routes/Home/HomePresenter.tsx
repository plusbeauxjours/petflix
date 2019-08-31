import React from "react";
import styled from "styled-components";
import Section from "../../Components/Section";
import Loader from "../../Components/Loader";

const Container = styled.div`
  padding: 0 20px;
`;

interface IProps {
  nowPlaying: any;
  upcoming: any;
  popular: any;
  loading: boolean;
  error: null;
}

const HomePresenter: React.FunctionComponent<IProps> = ({
  nowPlaying,
  upcoming,
  popular,
  loading,
  error
}) => {
  if (loading) {
    return <Loader />;
  } else if (!loading && nowPlaying && upcoming && popular) {
    return (
      <Container>
        {nowPlaying && nowPlaying.length > 0 && (
          <Section title="Now Playing">
            {nowPlaying.map(movie => (
              <span key={movie.id}>{movie.title}</span>
            ))}
          </Section>
        )}
        {upcoming && upcoming.length > 0 && (
          <Section title="Upcoming Movies">
            {upcoming.map(movie => (
              <span key={movie.id}>{movie.title}</span>
            ))}
          </Section>
        )}
        {popular && popular.length > 0 && (
          <Section title="Popular Movies">
            {popular.map(movie => (
              <span key={movie.id}>{movie.title}</span>
            ))}
          </Section>
        )}
      </Container>
    );
  } else {
    return null;
  }
};

export default HomePresenter;
