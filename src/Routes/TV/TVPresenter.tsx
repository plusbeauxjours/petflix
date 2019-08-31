import React from "react";
import styled from "styled-components";
import Section from "../../Components/Section";
import Loader from "../../Components/Loader";
import Message from "../../Components/Message";

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
              <span key={show.id}>{show.name}</span>
            ))}
          </Section>
        )}
        {airingToday && airingToday.length > 0 && (
          <Section title="Popular Shows">
            {airingToday.map(show => (
              <span key={show.id}>{show.name}</span>
            ))}
          </Section>
        )}
        {popular && popular.length > 0 && (
          <Section title="Airing Today">
            {popular.map(show => (
              <span key={show.id}>{show.name}</span>
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
