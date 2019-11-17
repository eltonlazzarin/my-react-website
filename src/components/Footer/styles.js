import styled from "styled-components";

export const Container = styled.div`
  background: #000;
`;

export const Social = styled.div`
  max-width: 800px;
  height: 73px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;

  div {
    display: flex;
    text-align: right;
    margin-right: 10px;
  }

  ul {
    display: flex;
  }

  li {
    padding: 20px;
  }

  img {
    width: 30px;
    height: 30px;

    &:hover {
      opacity: 0.7;
    }
  }

  p {
    color: #fff;
    font-size: 18px;
  }
`;
