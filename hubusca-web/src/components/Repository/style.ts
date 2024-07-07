import styled from "styled-components";

export const StyledRepository = styled.a`
  text-decoration: none;
  background-color: var(--brand-2);
  border: solid 2px var(--brand-1);
  padding: 20px;
  border-radius: var(--border-radius-4);
  text-align: justify;

  @media (max-width: 500px) {
    padding: 10px;
  }

  ul {
    li {
      span {
        font-weight: bold;
      }
    }
  }
`;
