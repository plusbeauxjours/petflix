import React from "react";
import styled from "styled-components";

const Container = styled.div`
  padding: 0 10px;
`;
interface IProps {
  movieResults: any;
  tvResults: any;
  searchTerm: string;
  loading: boolean;
  error: string;
  handleSubmit: (event) => void;
  updateTerm: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const SearchPresenter: React.FunctionComponent<IProps> = ({
  movieResults,
  tvResults,
  searchTerm,
  loading,
  error,
  handleSubmit
}) => <Container>{error && <p>{error}</p>}</Container>;

export default SearchPresenter;
