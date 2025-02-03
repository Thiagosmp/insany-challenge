import { IDotProps } from "@/types";
import styled from "styled-components";

export const SectionContent = styled.section<{ $background?: string }>`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 120px 112px 0 112px;
  background: ${(props) => props.$background ?? props.theme.colors.background};

  .contentSolutionCustomized {
    display: flex;
    flex-direction: column;
    width: 457px;

    .title {
      h2 {
        font-size: 2.5rem;
        font-weight: 600;
        color: ${(props) => props.theme.colors.neutralDark800};
        line-height: 125%;
        margin-bottom: 8px;
      }

      span {
        font-size: 1.125rem;
        color: ${(props) => props.theme.colors.neutralDark300};
      }
    }

    .contentCheck {
      display: flex;
      flex-direction: column;
      margin-top: 40px;
      gap: 24px;

      div {
        display: flex;
        align-items: center;
        gap: 16px;

        span {
          font-size: 1rem;
          color: ${(props) => props.theme.colors.neutralDark200};
        }
      }
    }

    .contentButton {
      margin-top: 64px;

      button {
        padding: 16px 53px;
      }
    }

    .contentContact {
      display: flex;
      align-items: center;
      margin-top: 32px;
      gap: 12px;
    }
  }

  .contentPriceCustomized {
    position: relative;

    .contentImage {
      width: 488px;
      height: 608px;
      background-image: url('/img/backgroundPoster.png');
      padding: 0 54px 0 0;
      background-color: rgba(29, 99, 255, 0.1);

      .image {
        display: flex;

        Image {
          width: auto;
          height: auto;
        }

        .arrow {
          position: absolute;
          bottom: -50px;
          right: 30px;
          transform: translateY(-50%);
        }
      }

      .dots {
        display: flex;
        justify-content: flex-end;
        align-items: flex-end;
        gap: 10px;
      }
    }

    

    .contentPrice {
        position: absolute;
        bottom: 90px;
        left: -210px;
        z-index: 1000; 
        background: ${(props) => props.theme.colors.white};
        border-radius: 6px;
        box-shadow: -15px 30px 50px -10px rgba(76, 74, 94, 0.2);
        padding: 24px;
        width: 278px;
        height: 185px;
        
        .price {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 16px;

          div {
            display: flex;
            flex-direction: column;
            gap: 8px;

            span {
              font-size: 1.125rem;
              color: ${(props) => props.theme.colors.neutralDark100};
            }

            .bold {
              font-weight: 600;
              font-size: 1.5rem;
              color: ${(props) => props.theme.colors.neutralDark800};
            }
          }
        }

        .icons {
          display: flex;
          align-items: center;
          border-top: 3px solid ${(props) => props.theme.colors.neutralGrayOpacity};

          .icon01 {
            position: relative;
            margin-top: 16px;
            width: 40px;
            height: 40px;
            border-radius: 180px;
          }

          .icon02 {
            position: relative;
            left: -10px;
            margin-top: 16px;
            width: 40px;
            height: 40px;
            border-radius: 180px;
          }

          .icon03 {
            position: relative;
            left: -20px;
            margin-top: 16px;
            width: 40px;
            height: 40px;
            border-radius: 180px;
          }

          .icon04 {
            position: relative;
            left: -30px;
            margin-top: 16px;
            width: 40px;
            height: 40px;
            border-radius: 180px;
          }
        }
      }
    }
`;

export const ContentFeatures = styled.section`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 187px;
  gap: 50px;
  margin-bottom: 120px;
`;

export const ContentNotices = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 850px;
  margin-bottom: 120px;

  .title {
    font-size: 1rem;
    font-weight: 600;
    color: ${(props) => props.theme.colors.primary};

    h2{
      font-size: 2.5rem;
      margin-top: 13px;
      font-weight: 600;
      color: ${(props) => props.theme.colors.neutralDark700};
      line-height: 125%;
      width: 400px;
    }
  }
`;

export const DotsContainer = styled.div`
  display: flex;
  height: 64px;
  align-items: center;
  gap: 5px;
`;

export const Dot = styled.div<IDotProps>`
  width: 5px;
  height: 5px;
  border-radius: 50%;
  background-color: ${(props) => (props.$active ? props.theme.colors.primary : props.theme.colors.white)};
  border: 1px solid ${(props) => (props.$active ? props.theme.colors.primary : props.theme.colors.white)};
  cursor: pointer;
  transition: background-color 0.3s ease;
`;
