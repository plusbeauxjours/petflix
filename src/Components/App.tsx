import React from "react";
import Router from "./Router";
import Header from "./Header";

const App: React.FC = () => {
  return (
    <>
      <Header />
      <Router />
      <div className="App" />
    </>
  );
};

export default App;
