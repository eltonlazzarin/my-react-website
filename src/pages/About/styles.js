import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 50px;
`;

export const AboutItem = styled.div`
  strong {
    margin-left: 15px;
    font-size: 74px;
  }

  h4 {
    font-size: 19px;
    color: #aaa;
    margin-top: 5px;
  }

  p {
    font-size: 22px;
    margin-top: 20px;
    margin-bottom: 15px;
  }
`;

export const Knowledges = styled.div`
  h4 {
    font-size: 35px;
    padding: 15px;
  }

  img {
    height: 180px;
    width: 360px;
  }
`;

export const Designer = styled.div`
  margin-left: 35px;
  padding: 15px;

  h4 {
    font-size: 35px;
  }

  p {
    font-size: 20px;
    padding: 13px;
    color: #aaa;
  }
`;

export const Coder = styled.div`
  margin-left: 35px;
  padding: 15px;

  h4 {
    font-size: 35px;
  }

  p {
    font-size: 20px;
    padding: 13px;
    color: #aaa;
  }
`;
