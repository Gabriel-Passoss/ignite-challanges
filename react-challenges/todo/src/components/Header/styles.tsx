import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 12.5rem;
  background-color: ${props => props.theme['gray-700']};

  img {
    margin-top: 5em;
    margin-bottom: 4rem;
    height: 9rem;
    width: 9rem;
  }

  div {
    display: flex;
    justify-content: center;
    width: 50%;
    margin: 0 auto;
  }

  input {
    width: 39.8rem;
    height: 3.3rem;
    margin-right: 1rem;
    background: ${props => props.theme['gray-500']};
    color: ${props => props.theme['gray-100']};
    padding: 1rem;

    border: 0;
    border-radius: 8px;

    :focus {
      transition: 0.15s;
    }
  }
  button {
    display: flex;
    align-items: center;
    justify-content: center;
    outline: none;
    width: 5.5rem;
    height: 3.25rem;
    background: ${props => props.theme['dark-blue']};

    border: 0;
    border-radius: 8px;

    span {
      font-size: 0.85rem;
      font-weight: 700;
      color: ${props => props.theme['gray-100']};

      margin-right: 0.3rem;
    }
  }
`