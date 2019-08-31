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
}) => <>{error && <p>{error}</p>}</>;

export default HomePresenter;
