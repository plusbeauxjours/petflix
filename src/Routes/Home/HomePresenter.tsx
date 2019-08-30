import React from "react";

interface IProps {
  topRated: any;
  popular: any;
  airingToday: any;
  loading: boolean;
  error: string;
}

const HomePresenter: React.FunctionComponent<IProps> = ({
  topRated,
  popular,
  airingToday,
  loading,
  error
}) => (
  <>
    <p>{topRated}</p>
    <p>{popular}</p>
    <p>{airingToday}</p>
    <p>{loading}</p>
    <p>{error}</p>
  </>
);

export default HomePresenter;
