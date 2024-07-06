import styled from "styled-components";

export const StyledMenu = styled.section`
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 60px;

  h3 {
    font-size: var(--size-h5);
    font-family: var(--font-family-inter);
    font-weight: var(--weight-500);
    padding: 10px;
  }

  div {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    flex-wrap: wrap;
  }
`;
