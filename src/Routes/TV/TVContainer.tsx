import React from "react";
import TVPresenter from "./TVPresenter";
import { tvApi } from "../../api";

interface IProps {
  topRated: any;
  popular: any;
  airingToday: string;
  loading: boolean;
  error: string;
}

interface IState {
  topRated: any;
  popular: any;
  airingToday: string;
  loading: boolean;
  error: string;
}

class TVContainer extends React.Component<IProps, IState> {
  public state = {
    topRated: null,
    popular: null,
    airingToday: null,
    loading: true,
    error: null
  };
  public async componentDidMount() {
    try {
      const {
        data: { results: topRated }
      } = await tvApi.topRated();
      const {
        data: { results: popular }
      } = await tvApi.popular();
      const {
        data: { results: airingToday }
      } = await tvApi.airingToday();
      this.setState({ topRated, popular, airingToday });
    } catch {
      this.setState({ error: "Can't find TV informateion" });
    } finally {
      this.setState({ loading: false });
    }
  }
  public render() {
    const { topRated, popular, airingToday, loading, error } = this.state;
    return (
      <TVPresenter
        topRated={topRated}
        popular={popular}
        airingToday={airingToday}
        loading={loading}
        error={error}
      />
    );
  }
}

export default TVContainer;
