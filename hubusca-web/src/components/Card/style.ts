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
    margin-bottom: 1rem;
    padding: 1rem;
    font-family: var(--font-family-inter);

    @media (max-width: 500px) {
      width: 15rem;
      height: 20rem;
    }

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

        @media (max-width: 500px) {
          width: 100px;
          height: 100px;
        }
      }
    }

    .card-body {
      width: 250px;
      display: flex;
      flex-direction: column;
      justify-content: center;

      background-color: var(--brand-2);
      border-radius: var(--border-radius-4);
      padding: 2rem;
      gap: var(--gap-10);

      @media (max-width: 500px) {
        width: 180px;
        padding: 1rem 0.5rem;
      }

      span {
        font-size: var(--size-body-1);
        font-weight: var(--weight-500);

        @media (max-width: 500px) {
          font-size: var(--size-body-2);
        }
      }
    }
  }
`;
