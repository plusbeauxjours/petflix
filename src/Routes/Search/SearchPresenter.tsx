import React from "react";

interface IProps {
  movieResults: any;
  tvResults: any;
  searchTerm: string;
  loading: boolean;
  error: string;
  handleSubmit: () => void;
}

const SearchPresenter: React.FunctionComponent<IProps> = ({
  movieResults,
  tvResults,
  searchTerm,
  loading,
  error,
  handleSubmit
}) => <>{error && <p>{error}</p>}</>;

export default SearchPresenter;
