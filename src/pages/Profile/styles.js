import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  max-width: 600px;
  margin: 50px auto;

  > button {
    width: 100%;
    margin: 10px 0 15px;
    background: #f64c75;
    height: 40px;
    color: #fff;
    border: 0;
    border-radius: 4px;
    font-weight: bold;
    font-size: 16px;
    transition: background 0.2s;

    &:hover {
      background: ${darken(0.15, '#f64c75')};
    }
  }

  form {
    display: flex;
    flex-direction: column;
    margin-top: 30px;

    input {
      background: rgba(0, 0, 0, 0.1);
      border: 0;
      border-radius: 4px;
      padding: 0 15px;
      height: 40px;
      color: #fff;
      margin: 0 0 10px;

      &::placeholder {
        color: rgba(255, 255, 255, 0.7);
      }
    }

    span {
      color: pink;
      font-weight: bold;
      align-self: flex-start;
      margin-bottom: 10px;
    }

    hr {
      border: 0;
      height: 1px;
      background: rgba(255, 255, 255, 0.2);
      margin: 10px 0 20px;
    }

    button {
      margin: 5px 0 15px;
      background: #3b9bff;
      height: 40px;
      color: #fff;
      border: 0;
      border-radius: 4px;
      font-weight: bold;
      font-size: 16px;
      transition: background 0.2s;

      &:hover {
        background: ${darken(0.02, '#3b9bff')};
      }
    }
  }

  a {
    color: #fff;
    font-size: 14px;
    opacity: 0.8;

    &:hover {
      opacity: 1;
    }
  }
`;
