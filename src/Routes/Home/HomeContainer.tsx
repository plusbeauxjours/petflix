import React from "react";
import HomePresenter from "./HomePresenter";

interface IProps {
  topRated: any;
  popular: any;
  airingToday: any;
  loading: boolean;
  error: string;
}

interface IState {
  topRated: any;
  popular: any;
  airingToday: any;
  loading: boolean;
  error: string;
}

class HomeContainer extends React.Component<IProps, IState> {
  public state = {
    topRated: null,
    popular: null,
    airingToday: null,
    loading: true,
    error: null
  };
  public render() {
    const { topRated, popular, airingToday, loading, error } = this.state;
    return (
      <HomePresenter
        topRated={topRated}
        popular={popular}
        airingToday={airingToday}
        loading={loading}
        error={error}
      />
    );
  }
}

export default HomeContainer;
