import React from "react";
import DetailPresenter from "./DetailPresenter";

interface IProps {
  result: any;
  loading: boolean;
  error: string;
}

interface IState {
  result: any;
  loading: boolean;
  error: string;
}

class DetailContainer extends React.Component<IProps, IState> {
  public state = {
    result: null,
    loading: true,
    error: null
  };
  public render() {
    const { result, loading, error } = this.state;
    return <DetailPresenter result={result} loading={loading} error={error} />;
  }
}

export default DetailContainer;
