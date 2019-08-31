import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100vw;
  display: flex;
  justify-content: center;
`;

const Text = styled.span`
  color: #e74c3c;
`;

interface IProps {
  text: string;
}

const Message: React.FunctionComponent<IProps> = ({ text }) => (
  <Container>
    <Text>{text}</Text>
  </Container>
);

export default Message;
