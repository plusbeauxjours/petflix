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
  modalOpen: boolean;
  seasonResult: any;
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
      isMovie: pathname.includes("/movie/"),
      modalOpen: false,
      seasonResult: null
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
        console.log(result);
      } else {
        ({ data: result } = await tvApi.showDetail(parsedId));
        console.log(result);
      }
    } catch {
      this.setState({ error: "Cant find anythig." });
    } finally {
      this.setState({ loading: false, result });
    }
  }
  public render() {
    const {
      result,
      loading,
      error,
      isMovie,
      modalOpen,
      seasonResult
    } = this.state;
    return (
      <DetailPresenter
        result={result}
        loading={loading}
        error={error}
        isMovie={isMovie}
        modalOpen={modalOpen}
        toggleModal={this.toggleModal}
        seasonResult={seasonResult}
      />
    );
  }

  public toggleModal = async season_number => {
    const { modalOpen } = this.state;
    if (modalOpen) {
      this.setState({ modalOpen: false });
    } else {
      const {
        match: {
          params: { id = null }
        }
      } = this.props;
      const parsedId = parseInt(id);
      const parsedSeasonNumber = parseInt(season_number);
      const { data: seasonResult } = await tvApi.seasonDetail(
        parsedId,
        parsedSeasonNumber
      );
      this.setState({ seasonResult });
      this.setState({ modalOpen: true });
    }
  };
}

export default DetailContainer;
