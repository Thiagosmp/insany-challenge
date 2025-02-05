import styled from "styled-components";

export const HeaderBack = styled.div`
  width: 100%;
  display: flex;
  height: 96px;
  background-color: ${(props) => props.theme.colors.neutralDark800};
  justify-content: center;
`;

export const ContainerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 100vh;
  padding: 30px;

  .container {
    display: flex;
    flex-direction: column;

    .content {
      display: flex;
      flex-direction: row;
      align-items: center;
      gap: 156px;

      .titleElips {
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        max-width: 200px; 
        display: inline-block;
        vertical-align: middle;
        color: ${(props) => props.theme.colors.primary};
      }

      .navigation {
        display: flex;
        gap: 6px;
        align-items: center;
        color: ${(props) => props.theme.colors.neutralDark50};

        span {
          font-size: 14px;
          line-height: 16px;
        }

        a {
          color: ${(props) => props.theme.colors.neutralDark50};
          font-size: 14px;
          line-height: 16px;
          text-decoration: none;
        }
      }
    }

    .title {
      display: flex;
      flex-direction: column;
      padding: 0 208px;
      margin-top: 12px;
      gap: 16px;

      button {
        display: flex;
        align-items: center;
        justify-content: center;
        border: none;
        padding: 4px 8px;
        background-color: ${(props) => props.theme.colors.primary};	
        color: ${(props) => props.theme.colors.white};
        width: 141px;
        border-radius: 2px;
      }

      h1 {
        width: 700px;
        font-size: 2.25rem;
        line-height: 40px;
        color: #2C343E;
        line-height: 1.25;
        font-weight: 600;
      }

      .author {
        display: flex;
        align-items: center;
        gap: 12px;
        margin-top: 15px;

        span {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 1rem;
          color: ${(props) => props.theme.colors.neutralDark50};

          .name {
            font-weight: 600;
          }

          .dot {
            width: 8px;
            height: 8px;
            border-radius: 50%;
            background-color: ${(props) => props.theme.colors.primary};
          }
        }
      }
    }

    .image {
      display: flex;
      justify-content: center;
      margin: 68px 0;

      img {
        border-radius: 4px;
      }
    }

    .description {
      margin: auto;
      display: flex;
      flex-direction: column;
      font-size: 1rem;
      line-height: 1.5;
      gap: 58px;
      width: 800px;

      span {
        display: flex;
        padding: 28px 40px;
        background-color: ${(props) => props.theme.colors.neutralGray01};
        border-radius: 6px;
        color: ${(props) => props.theme.colors.neutralDark50};
        line-height: 1.7;
      }

      h3 {
        font-size: 1.75rem;
        line-height: 1.2;
        color: ${(props) => props.theme.colors.neutralDark500};
        font-weight: 600;

      }

      .question {
        background-color: ${(props) => props.theme.colors.white};
        padding: 0;
        margin-top: 18px;
      }

      .imageShort {
        display: flex;
        justify-content: center;

        img {
          border-radius: 4px;
        }
      }
    }
  }

  @media ( width >= 425px) {
    padding: 50px;
  }

  @media ( width > 768px) {
    padding: 62px 112px;
  }
`;

export const ButtonBack = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #59657399;
  width: 52px;
  height: 16px;
  gap: 10px;
  cursor: pointer;

  img {
    width: auto;
    height: auto;
  }
  
`;
