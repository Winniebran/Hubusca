import styled from "styled-components";

export const StyledInput = styled.div`
  background-color: var(--grey-7);
  border-radius: var(--border-radius-8);
  width: 30rem;
  height: 3rem;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 500px) {
    width: 20rem;
  }

  input {
    width: 27rem;
    color: var(--brand-1);
    padding: 10px;
    font-size: var(--size-h6);

    &::placeholder {
      font-size: var(--size-h6);
      color: var(--brand-1);
      border-radius: var(--radius-4);
    }
  }

  button {
    font-size: var(--size-h4);
  }
`;
