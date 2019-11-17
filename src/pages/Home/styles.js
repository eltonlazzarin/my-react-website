import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 50px;

  div {
    padding: 25px;
    height: 600px;
    width: 500px;
  }

  strong {
    font-size: 64px;
  }

  p {
    font-size: 19px;
    color: #aaa;
  }

  img {
    height: 400px;
    width: 400px;
  }
`;

export const Coder = styled.div`
  strong {
    font-size: 64px;
  }

  p {
    font-size: 19px;
    color: #aaa;
  }

  img {
    height: 500px;
    width: 500px;
  }
`;
