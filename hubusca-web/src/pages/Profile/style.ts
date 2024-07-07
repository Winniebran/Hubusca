import styled from "styled-components";

export const StyledProfile = styled.section`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--gap-60);
  background-color: var(--brand-3);
  font-family: var(--font-family-inter);

  .profile-img {
    padding: 20px 0;
    display: flex;
    gap: var(--gap-60);
    align-items: center;

    img {
      width: 150px;
      height: 150px;
      object-fit: cover;
      border-radius: var(--border-radius-150);
    }

    .profile-data {
      display: flex;
      flex-direction: column;
      justify-content: center;
      gap: var(--gap-5);

      span {
        font-size: var(--size-body-1);
        font-weight: var(--weight-500);

        @media (max-width: 500px) {
          font-size: var(--size-body-3);
        }
      }
    }

    .link {
      font-size: var(--size-h1);
      color: var(--brand-1);

      @media (max-width: 500px) {
        font-size: var(--size-h2);
      }
    }

    @media (max-width: 500px) {
      gap: var(--gap-20);
    }
  }

  .profile-body {
    width: 80%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: var(--gap-10);
    overflow: auto;

    h2 {
      font-size: var(--size-h5);
      font-weight: var(--weight-600);
      align-self: baseline;
    }

    .profile-body-repository {
      width: 80vw;
      border-radius: var(--border-radius-4);
      display: flex;
      flex-direction: column;
      justify-content: center;
      gap: var(--gap-30);
      margin: 10px 0;
      font-size: var(--size-h7);

      @media (max-width: 500px) {
        font-size: var(--size-body-2);
      }

      sub {
        font-size: var(--size-body-1);
        font-weight: var(--weight-400);
        align-self: center;
        margin-top: 60px;
      }
    }
  }
`;
