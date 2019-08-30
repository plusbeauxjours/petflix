import React from "react";
import HomePresenter from "./HomePresenter";
import { moviesApi } from "../../api";

interface IProps {
  nowPlaying: null;
  upcoming: null;
  popular: null;
  loading: true;
  error: null;
}

interface IState {
  nowPlaying: any;
  upcoming: any;
  popular: any;
  loading: boolean;
  error: string;
}

class HomeContainer extends React.Component<IProps, IState> {
  public state = {
    nowPlaying: null,
    upcoming: null,
    popular: null,
    loading: true,
    error: null
  };
  public async componentDidMount() {
    try {
      const {
        data: { results: nowPlaying }
      } = await moviesApi.nowPlaying();
      const {
        data: { results: upcoming }
      } = await moviesApi.upcoming();
      const {
        data: { results: popular }
      } = await moviesApi.popular();
      this.setState({ nowPlaying, upcoming, popular });
    } catch {
      this.setState({ error: "Can't find movies informateion" });
    } finally {
      this.setState({
        loading: false
      });
    }
  }
  public render() {
    const { nowPlaying, upcoming, popular, loading, error } = this.state;
    return (
      <HomePresenter
        nowPlaying={nowPlaying}
        upcoming={upcoming}
        popular={popular}
        loading={loading}
        error={error}
      />
    );
  }
}

export default HomeContainer;
