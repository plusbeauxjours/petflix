import React from "react";
import DetailPresenter from "./DetailPresenter";
import { RouteComponentProps } from "react-router";
import { movieApi, tvApi } from "../../api";

interface IProps extends RouteComponentProps<any> {}

interface IState {
  result: any;
  loading: boolean;
  error: string;
  isMovie: boolean;
}

class DetailContainer extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    const {
      location: { pathname }
    } = props;
    this.state = {
      result: null,
      loading: true,
      error: null,
      isMovie: pathname.includes("/movie/")
    };
  }
  public async componentDidMount() {
    const {
      match: {
        params: { id = null }
      },
      history: { push }
    } = this.props;
    const { isMovie } = this.state;
    const parsedId = parseInt(id);
    if (isNaN(parsedId)) {
      return push("/");
    }
    let result = null;
    try {
      if (isMovie) {
        ({ data: result } = await movieApi.movieDetail(parsedId));
      } else {
        ({ data: result } = await tvApi.showDetail(parsedId));
      }
    } catch {
      this.setState({ error: "Cant find anythig." });
    } finally {
      this.setState({ loading: false, result });
    }
  }
  public render() {
    const { result, loading, error, isMovie } = this.state;
    return (
      <DetailPresenter
        result={result}
        loading={loading}
        error={error}
        isMovie={isMovie}
      />
    );
  }
}

export default DetailContainer;
