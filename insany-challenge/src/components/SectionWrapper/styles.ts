import { IDotProps } from "@/types";
import styled from "styled-components";

export const SectionContent = styled.section<{ $background?: string }>`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 0 24px;
  background: ${(props) => props.$background ?? props.theme.colors.background};

  .contentSolutionCustomized {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 128px;

    .title {
      h2 {
        font-size: 1.5rem;
        font-weight: 600;
        color: ${(props) => props.theme.colors.neutralDark800};
        line-height: 1.25;
        margin-bottom: 8px;
        text-align: center;
      }

      span {
        display: flex;
        font-size: 1rem;
        color: ${(props) => props.theme.colors.neutralDark300};
        line-height: 1.5;
        text-align: center;
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

    @media ( width > 1280px ){
      width: 457px;
      margin-top: 0px;
      align-items: start;

      .title {
        h2 {
          font-size: 2.5rem;
          text-align: start;
        }

        span {
          font-size: 1.125rem;
          color: ${(props) => props.theme.colors.neutralDark300};
          text-align: start;
        }
      }
    }
  }

  .contentPriceCustomized {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    position: relative;
    margin-top: 40px;

    .contentImage {
      width: 229px;
      height: 285px;
      background-image: url('/img/backgroundPoster.png');
      padding: 0 25px 0 0;
      background-color: rgba(29, 99, 255, 0.1);

      .image {
        display: flex;

        @media ( width <= 1280px ){
          img {
            width: 203px;
            height: 255px;
          }
        }

        .arrow {
          position: absolute;
          bottom: -10px;
          right: 15px;
          transform: translateY(-50%);
          width: 23.5px;
          height: 70px;
        }
      }

      .dots {
        display: flex;
        justify-content: flex-end;
        align-items: flex-end;
        gap: 10px;
      }

      @media ( width > 1280px ){
        width: 488px;
        height: 608px;
        padding: 0 54px 0 0;

        .image {
          .arrow {
            width: 50px;
            height: 150px;
            position: absolute;
            bottom: -50px;
            right: 30px;
            transform: translateY(-50%);
          }
        }
      }
    }

    .contentPrice {
      position: absolute;
      bottom: 20px;
      right: 150px;
      z-index: 1000; 
      background: ${(props) => props.theme.colors.white};
      border-radius: 6px;
      box-shadow: -15px 30px 50px -10px rgba(76, 74, 94, 0.2);
      width: 130px;
      padding: 11px;
      
      .price {
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
        margin-bottom: 7.5px;

        div {
          display: flex;
          flex-direction: column;
          gap: 8px;

          span {
            font-size: 0.53rem;
            color: ${(props) => props.theme.colors.neutralDark100};
          }

          .bold {
            font-weight: 600;
            font-size: 0.688rem;
            color: ${(props) => props.theme.colors.neutralDark800};
          }
        }

        img {
          width: 9.5px;
          height: 8.5px;
        }
      }

      .icons {
        display: flex;
        align-items: center;
        border-top: 3px solid ${(props) => props.theme.colors.neutralGrayOpacity};

        img {
          width: 16.5px;
          height: 16.5px;
        }

        .icon01 {
          position: relative;
          margin-top: 7.5px;
          
          @media ( width > 1280px ){
            width: 40px;
            height: 40px;
            margin-top: 16px;
          }
        }

        .icon02 {
          position: relative;
          margin-top: 7.5px;
          
          @media ( width > 1280px ){
            width: 40px;
            height: 40px;
            left: -10px;
            margin-top: 16px;
          }
        }

        .icon03 {
          position: relative;
          margin-top: 7.5px;
          
          @media ( width > 1280px ){
            width: 40px;
            height: 40px;
            left: -20px;
            margin-top: 16px;
          }
        }

        .icon04 {
          position: relative;
          margin-top: 7.5px;

          @media ( width > 1280px ){
            width: 40px;
            height: 40px;
            left: -30px;
            margin-top: 16px;
          }
        }

        @media ( width > 1280px ){
          img {
            width: 30.5px;
            height: 30.5px;
          }
        }
      }

      @media ( width > 1280px ){
        bottom: 50px;
        left: -210px;
        width: 278px;
        height: 185px;
        padding: 24px;
        
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

          img {
            width: 20px;
            height: 18px;
          }
        }
      }

      @media ( width >= 375px) {
        right: 200px;
      }
    }

    @media ( width > 525px ){
      margin: 40px auto 0 auto;
    }

    @media ( width > 1280px ){
      margin: 0;
    }
  }

  @media ( width > 1280px ){
    padding: 120px 112px 0 112px;
    flex-direction: row;
    justify-content: space-between;
  }
`;

export const ContentFeatures = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
  width: 100%;
  gap: 50px;
  margin: 64px 0;

  @media ( width > 1280px ){
    height: 187px;
    flex-direction: row;
    margin-bottom: 120px;
    align-items: flex-start;
    text-align: start;
    margin: 0 0 120px 0;
  }
`;

export const ContentNotices = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom:64px;

  .title {
    span {
      display: none;
    }

    h2{
      font-size: 1.5rem;
      margin-top: 41px;
      font-weight: 600;
      color: ${(props) => props.theme.colors.neutralDark700};
      line-height: 1.25;
      text-align: center;
    }

    @media ( width > 760px ){
      
      span {
        display: block;
        font-size: 1rem;
        font-weight: 600;
        color: ${(props) => props.theme.colors.primary};
      }
      
      h2 {
        font-size: 2.5rem;
        width: 400px;
        text-align: start;
        margin-top: 13px;
      }
    }
  }

  @media ( width > 1280px ){
    margin-bottom: 120px;
    height: 850px;
  }
`;

export const DotsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  height: 30px;

  @media ( width > 1280px ){
    height: 64px;
  }
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
