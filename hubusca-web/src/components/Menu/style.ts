import styled from "styled-components";

export const StyledMenu = styled.section`
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--gap-60);

  h3 {
    font-size: var(--size-h5);
    font-family: var(--font-family-inter);
    font-weight: var(--weight-500);
    padding: 10px;

    @media (max-width: 500px) {
      font-size: var(--size-h7);
    }
  }

  div {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    flex-wrap: wrap;
    gap: var(--gap-20);
  }
`;
