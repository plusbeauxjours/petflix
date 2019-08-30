import React from "react";

interface IProps {
  nowPlaying: null;
  upcoming: null;
  popular: null;
  loading: boolean;
  error: null;
}

const HomePresenter: React.FunctionComponent<IProps> = ({
  nowPlaying,
  upcoming,
  popular,
  loading,
  error
}) => (
  <>
    <p>{nowPlaying}</p>
    <p>{upcoming}</p>
    <p>{popular}</p>
    <p>{loading}</p>
    <p>{error}</p>
  </>
);

export default HomePresenter;
