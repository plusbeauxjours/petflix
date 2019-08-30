import React from "react";

interface IProps {
  movieResults: any;
  tvResults: any;
  searchTerm: string;
  loading: boolean;
  error: string;
}

const SearchPresenter: React.FunctionComponent<IProps> = ({
  movieResults,
  tvResults,
  searchTerm,
  loading,
  error
}) => (
  <>
    <p>{movieResults}</p>
    <p>{tvResults}</p>
    <p>{searchTerm}</p>
    <p>{loading}</p>
    <p>{error}</p>
  </>
);

export default SearchPresenter;
