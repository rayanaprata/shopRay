import styled from 'styled-components';

export const Main = styled.main`
  margin: auto;
  width: 80%;

  .nav{
    display: flex;
    align-items: center;
    justify-content: space-between;

    .cart{
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }

  section {
    height: 80vh;
    width: 100%;
    padding: 50px 12px;
    background: #FFF5FB;
    border-radius: 12px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;

    .product-content{
      display: grid;
      text-align: center;
      height: 300px;
      background: #fff;
      border-radius: 12px;
      padding: 12px;
      box-shadow: 0px 3px 3px rgba(0, 0, 0, 0.15);

      span {
        font-size: .85rem;
      }

      button {
        background-color: #ef6f98;
        border-radius: 6px;
        color: #FFF5FB;
        border: none;
        cursor: pointer;
        height: 28px;

        &:hover {
          background-color: #ffe5ed;
          color: #ef6f98;
        }
      }
    }
  }
`;

export const Container = styled.div`
  background-color: #fff;
`;

export const Footer = styled.footer`
  text-align: center;
  color: #4d4d4d;
  height: 100px;
  background-color: #FFF5FB;
  padding-top: 50px;
  margin-top: 50px;

  li {
    color: #ef6f98;
    display: inline;
    padding: 0 40px;
    border-right: 1px solid #ffc4d6;

    &:hover {
      color: #4942cf;
    }

    &:nth-child(4) {
      border-right: none;
    }
  }

  ul {
    margin-bottom: 8px;
  }

  span {
    font-size: .95rem;
  }

  a {
    color: #ef6f98;
    text-decoration: none;
    &:hover {
      color: #f495b3;
    }
  }
`;