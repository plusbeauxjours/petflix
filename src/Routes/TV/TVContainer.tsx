import React from "react";
import TVPresenter from "./TVPresenter";

interface IProps {
  movieResults: any;
  tvResults: any;
  searchTerm: string;
  loading: boolean;
  error: string;
}

interface IState {
  movieResults: any;
  tvResults: any;
  searchTerm: string;
  loading: boolean;
  error: string;
}

class TVContainer extends React.Component<IProps, IState> {
  public state = {
    movieResults: null,
    tvResults: null,
    searchTerm: "",
    loading: true,
    error: null
  };
  public render() {
    const { movieResults, tvResults, searchTerm, loading, error } = this.state;
    return (
      <TVPresenter
        movieResults={movieResults}
        tvResults={tvResults}
        searchTerm={searchTerm}
        loading={loading}
        error={error}
      />
    );
  }
}

export default TVContainer;
