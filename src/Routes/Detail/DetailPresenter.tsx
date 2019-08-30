import React from "react";

interface IProps {
  result: any;
  error: string;
  loading: boolean;
}

const DetailPresenter: React.FunctionComponent<IProps> = ({
  result,
  loading,
  error
}) => (
  <>
    <p>{result}</p>
    <p>{loading}</p>
    <p>{error}</p>
  </>
);

export default DetailPresenter;
