import React from "react";
import styled from "styled-components";
import ScaleLoader from "react-spinners/ScaleLoader";

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  font-size: 28px;
  margin-top: 20px;
`;

const Loader = () => (
  <Container>
    <ScaleLoader color={"white"} />
  </Container>
);

export default Loader;
