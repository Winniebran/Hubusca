import styled, { css } from "styled-components";
import { CardProps } from "../../interfaces/card.interface";

export const StyledCard = styled.section<CardProps>`
  ${({ isModal }) =>
    isModal
      ? css`
          display: flex;
          align-items: center;
          justify-content: center;
        `
      : css`
          background-color: var(--white);
        `}

  .card {
    width: 22rem;
    height: 28rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: var(--gap-30);
    background-color: var(--brand-3);
    border-radius: var(--border-radius-4);
    margin-bottom: 6rem;
    padding: 1rem;
    font-family: var(--font-family-inter);

    @keyframes showDropDown {
      0% {
        opacity: 0;
        transform: translateY(-50px);
      }

      100% {
        opacity: 1;
        transform: translateY(0px);
      }
    }

    .card-button {
      display: flex;
      align-self: flex-end;
    }

    .card-img {
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;

      img {
        width: 150px;
        height: 150px;
        object-fit: cover;
        border-radius: var(--border-radius-150);
      }
    }

    .card-body {
      width: 250px;
      display: flex;
      flex-direction: column;
      justify-content: center;

      background-color: var(--brand-2);
      border-radius: var(--border-radius-4);
      padding: 2rem 2rem;
      gap: var(--gap-10);

      span {
        font-size: var(--size-body-1);
        font-weight: var(--weight-500);
      }
    }
  }
`;
