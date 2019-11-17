import styled from "styled-components";

export const Container = styled.div`
  background: #000;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

export const Content = styled.div`
  height: 85px;
  max-width: 1100px;
  margin: 0 auto;

  display: flex;
  justify-content: space-between;
  align-items: center;

  nav {
    display: flex;
    align-items: center;
    margin-top: 13px;

    img {
      width: 65px;
      height: 65px;

      &:hover {
        opacity: 0.7;
      }
    }
  }

  aside {
    display: flex;
    align-items: center;
  }

  ul {
    display: flex;
  }

  a {
    color: #fff;
    font-size: 20px;
    padding: 20px;

    &:hover {
      opacity: 0.7;
    }
  }
`;

export const Social = styled.div`
  display: flex;
  margin-left: 18px;
  padding-left: 20px;

  div {
    text-align: right;
    margin-right: 10px;
  }

  ul {
    margin-left: 70px;
  }

  img {
    width: 35px;
    height: 35px;

    &:hover {
      opacity: 0.7;
    }
  }
`;
