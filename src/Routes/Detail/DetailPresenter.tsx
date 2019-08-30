import React from "react";

interface IProps {
  result: any;
  error: string;
  loading: boolean;
}

const DetailPresenter: React.FunctionComponent<IProps> = ({
  result,
  error,
  loading
}) => (
  <>
    <p>{result}</p>
    <p>{error}</p>
    <p>{loading}</p>
  </>
);

export default DetailPresenter;
