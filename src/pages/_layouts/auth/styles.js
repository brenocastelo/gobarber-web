import styled from 'styled-components';
import { darken } from 'polished';

export const Wrapper = styled.div`
  height: 100%;
  background: linear-gradient(-90deg, #7159c1, #ca27e7);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.div`
  width: 100%;
  max-width: 315px;
  text-align: center;

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
