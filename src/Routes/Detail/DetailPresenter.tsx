import React from "react";
import styled from "styled-components";

const Conatiner = styled.div`
  padding: 0 10px;
`;

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
  <Conatiner>
    <p>{result}</p>
    <p>{loading}</p>
    <p>{error}</p>
  </Conatiner>
);

export default DetailPresenter;
