import React from "react";
import SearchPresenter from "./SearchPresenter";

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

class SearchContainer extends React.Component<IProps, IState> {
  public state = {
    movieResults: null,
    tvResults: null,
    searchTerm: "",
    loading: false,
    error: null
  };
  public render() {
    const { movieResults, tvResults, searchTerm, loading, error } = this.state;
    return (
      <SearchPresenter
        movieResults={movieResults}
        tvResults={tvResults}
        searchTerm={searchTerm}
        loading={loading}
        error={error}
      />
    );
  }
}

export default SearchContainer;
