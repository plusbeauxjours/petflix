import React from "react";
import SearchPresenter from "./SearchPresenter";
import { movieApi, tvApi } from "../../api";

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
    searchTerm: "code",
    loading: false,
    error: null
  };
  public componentDidMount() {
    this.handleSubmit();
  }
  public render() {
    const { movieResults, tvResults, searchTerm, loading, error } = this.state;
    return (
      <SearchPresenter
        movieResults={movieResults}
        tvResults={tvResults}
        searchTerm={searchTerm}
        loading={loading}
        error={error}
        handleSubmit={this.handleSubmit}
      />
    );
  }
  public handleSubmit = () => {
    const { searchTerm } = this.state;
    if (searchTerm !== "") {
      this.searchByTerm();
      console.log(searchTerm);
    }
  };
  public searchByTerm = async () => {
    const { searchTerm } = this.state;
    this.setState({ loading: true });
    try {
      const {
        data: { results: movieResults }
      } = await movieApi.search(searchTerm);
      console.log(movieResults);
      const {
        data: { results: tvResults }
      } = await tvApi.search(searchTerm);
      console.log(tvResults);
      this.setState({ movieResults, tvResults });
    } catch {
      this.setState({ error: "Can't find results." });
    } finally {
      this.setState({ loading: false });
    }
  };
}

export default SearchContainer;
