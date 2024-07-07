import styled from "styled-components";

export const StyledHeader = styled.header`
  width: 100%;
  height: 120px;
  display: flex;
  justify-content: center;
  align-items: center;
  animation: transition ease-in-out 2s;
  font-family: var(--font-family-lexend);

  background-color: var(--brand-3);
  border-bottom: 1px solid var(--grey-6);
  color: var(--grey-0);
  font-size: var(--size-h2);
  font-weight: var(--weight-500);

  span {
    color: var(--brand-1);
    font-size: var(--size-h1);
    font-weight: var(--weight-700);
  }

  @keyframes transition {
    0% {
      opacity: 0;
    }

    100% {
      opacity: 1;
    }
  }
`;
