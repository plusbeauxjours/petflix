import React from "react";

interface IProps {
  topRated: any;
  popular: any;
  airingToday: string;
  loading: boolean;
  error: string;
}

const TVPresenter: React.FunctionComponent<IProps> = ({
  topRated,
  popular,
  airingToday,
  loading,
  error
}) => <>{error && <p>{error}</p>}</>;

export default TVPresenter;
