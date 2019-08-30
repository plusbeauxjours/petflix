import React from "react";
import DetailPresenter from "./DetailPresenter";

interface IProps {
  result: any;
  error: string;
  loading: boolean;
}

interface IState {
  result: any;
  error: string;
  loading: boolean;
}

class DetailContainer extends React.Component<IProps, IState> {
  public state = {
    result: null,
    error: null,
    loading: true
  };
  public render() {
    const { result, error, loading } = this.state;
    return <DetailPresenter result={result} error={error} loading={loading} />;
  }
}

export default DetailContainer;
