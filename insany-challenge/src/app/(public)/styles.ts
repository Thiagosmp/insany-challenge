import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 100vh;
`;

export const ContentMainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-image: url('/img/bg-main.png');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-color: ${(props) => props.theme.colors.neutralDark800};

  @media ( width > 1280px ) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }
`;

export const ContentHeroWrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${(props) => props.theme.colors.red};
  padding: 128px 24px 0 24px;
  justify-content: center;
  align-items: center;

  .star {
    width: 200px;
    display: flex;
    color: ${(props) => props.theme.colors.white};
    gap: 8px;
    font-size: 0.9rem;
    padding: 10px 20px 10px 16px;
    border: 2px solid ${(props) => props.theme.colors.neutralDarkBorder}; ;
    border-radius: 40px;
    align-items: center;
  }

  h1 {
    text-align: center;
    font-size: 2rem;
    font-weight: 700;
    color: ${(props) => props.theme.colors.white};
    margin-top: 20px;
    line-height: 1.25;
  }

  span {
    font-size: 1.125rem;
    color: ${(props) => props.theme.colors.white};
    margin-top: 13px;
    line-height: 1.5;
    text-align: center;
  }

  .alignDivision {
    display: flex;
    justify-content: center;

    .division {
      width: 32px;
      height: 2px;
      background-color: ${(props) => props.theme.colors.primary};
      margin: 56px 0;
    }
  }

  .bancDetails {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    justify-content: center;
    gap: 64px;

    div {
      display: flex;
      flex-direction: column;

      h2 {
      font-size: 2.5rem;
      color: ${(props) => props.theme.colors.white};
      }

      span {
        font-size: 1rem;
        color: ${(props) => props.theme.colors.white};
      }
    }
  }

  @media ( width > 1280px ) and ( width < 1440px ) {
    max-width: 730px;
    padding: 110px 0 110px 90px;
    align-items: start;

    h1 {
      font-size: 2.5rem;
      text-align: start;
    }

    span {
      text-align: start;
      font-size: 0.875rem;
    }

    .alignDivision {
      justify-content: start;
    }

    .bancDetails {
      flex-direction: row;
      text-align: start;
    }
  }

  @media ( width >= 1440px ) {
    max-width: 730px;
    padding: 170px 0 156px 112px;
    align-items: start;

    h1 {
      font-size: 3.5rem;
      text-align: start;
    }

    span {
      text-align: start;
    }

    .alignDivision {
      justify-content: start;
    }

    .bancDetails {
      flex-direction: row;
      text-align: start;
    }
  }
`;

export const Advantages = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 64px 14px;
  background-image: url('/img/advantagesBanner.png');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-color: ${(props) => props.theme.colors.neutralDark800};
  align-items: center;

  @media ( width > 1024px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    height: 994px;
    padding: 40px;
  }

  @media ( width > 1440px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    height: 994px;
    padding: 120px 112px 120px 112px;
  }
`;

export const AdvantagesExclusive = styled.div`
  display: flex;
  color: ${(props) => props.theme.colors.neutralDark800};
  
  div {
    display: flex;
    flex-direction: column;
    
    h2 {
      color: ${(props) => props.theme.colors.white};
      line-height: 1.25;
      font-size: 1.5rem;
      font-weight: 600;
      text-align: center;
    }

    .specificationAdvantages {
      display: flex;
      gap: 32px;
      margin-top: 48px;
      padding: 33px 42px 33px 34px;
      background-color: ${(props) => props.theme.colors.white};;
      border-radius: 6px;

      .contentProgress {
        display: flex;
        gap: 17px;

        h3 {
          font-size: 1.5rem;
          color: ${(props) => props.theme.colors.neutralDark500};
        }

        p {
          font-size: 1rem;
          color: ${(props) => props.theme.colors.neutralDark300};
        }

        .progressBar {
          background-color: ${(props) => props.theme.colors.neutralGrayOpacity};
          width: 100%;
          border-radius: 8px;
          border: none;

          span {
            position: relative;
            width: 35%;
            height: 6px;
            background-color: ${(props) => props.theme.colors.primary};
            border-radius: 8px;
          }
        }
      }
    }

    .advantages {
      color: ${(props) => props.theme.colors.neutralGray02};

      div {
        padding: 58px 34px 34px 34px;
        display: flex;
        gap: 17px;

        h3 {
          font-weight: 700;
          font-size: 1.5rem;
        }

        span {
          font-size: 1.125rem;
          line-height: 1.5;
        }
      }
    }
  }

  @media ( width > 1024px) {
    width: 500px;

    div {
      h2 {
        font-size: 2.5rem;
        text-align: start;
      }

      .specificationAdvantages {
        margin-top: 76px;
      }
    }
  }
`;

export const AdvantagesBanner = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  gap: 32px;
  width: 100%;

  .contentBanner {
    display: flex;
    height: 100%;
    flex-direction: column;

    .contentButton {
      display: flex;
      justify-content: center;
      width: 100%;
      margin-top: 32px;

      Button {
        padding: 16px 69px;
      }

      @media ( width > 1024px) {
        justify-content: flex-end;
        margin-top: 66px;
      }
    }
    
    .alignImages {
      display: flex;
      justify-content: center;
      height: 100%;
      gap: 16px;
      margin-top: 64px;

      div {
        display: flex;
        flex-direction: column;
        gap: 32px;

        img {
          border-radius: 8px;
        }
        
        .arrowUp {
          display: flex;
          rotate: 180deg;
          align-items: flex-end;
          width: 90px;
          height: 40px;
        }

        @media ( width > 1280px) {
          .arrowUp {
            width: 149px;
            height: 55px;
          }
        }
      }

      .model {
        align-items: flex-end;
        position: relative;

        .imgCarousel {
          width: 156px;
          height: 222px;
        }

        div {
          position: absolute;
          bottom: 33%;
          left: -12%;
          display: flex;
          flex-direction: row;
          gap: 8px;
          font-size: 0.625rem;
          align-items: center;
          background-color: ${(props) => props.theme.colors.white};
          border-radius: 40px;
          color: ${(props) => props.theme.colors.neutralDark200};
          padding: 5px 10px;

          @media ( min-width : 1025px) and ( max-width : 1280px) {
            bottom: 72%;
          } 

          @media ( min-width : 1281px) and ( max-width : 1440px) {
            font-size: 0.875rem;
            bottom: 53%;
            padding: 11px 18px 11px 12px;
          }

          @media ( width > 1440px ) {
            bottom: 43%;
            font-size: 0.875rem;
            padding: 11px 18px 11px 12px;
          }
        }

        @media ( width > 1280px) {
          .imgCarousel {
            width: 282px;
            height: 402px;
          }
        }
      }

      .graph {
        position: relative;

        .imgCarousel {
          width: 156px;
          height: 222px;
        }

        .arrowDown {
          width: 90px;
          height: 40px;
        }

        div {
          position: absolute;
          bottom: 43%;
          left: -12%;
          display: flex;
          flex-direction: row;
          gap: 8px;
          align-items: center;
          background-color: ${(props) => props.theme.colors.white};
          border-radius: 40px;
          color: ${(props) => props.theme.colors.neutralDark200};
          font-size: 0.875rem;
          padding: 11px 18px 11px 12px;
        }

        @media ( width > 1280px) {
          .arrowDown {
            width: 149px;
            height: 55px;
          }
          
          .imgCarousel {
            width: 282px;
            height: 402px;
          }
        }
      }

      @media ( width > 1024px) {
        margin-top: 70px;
      }

      @media ( width > 1280px) {
        justify-content: flex-end;
        gap: 29px;
      }
    }
  }
`;

export const ContentContactButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  gap: 56px;
  margin: 64px 0;
  flex-direction: column;

  .division {
    height: 4px;
    width: 100%;
    background-color: ${(props) => props.theme.colors.neutralGrayOpacity};
  }

  div {
    display: flex;
    flex-direction: column;
    align-items: center;

    h2 {
      font-size: 1.5rem;
      color: ${(props) => props.theme.colors.neutralDark800};
      margin-top: 32px;
      width: 320px;
      text-align: center;
      line-height: 1.25;
      font-weight: 600;
    }

    span {
      font-size: 1.125rem;
      color: ${(props) => props.theme.colors.neutralDark200};
      line-height: 1.5;
      margin-top: 8px;
      text-align: center;
    }

    Button {
      padding: 16px 56px;
      margin-top: 32px;
    }

    @media ( width > 1024px) {
      text-align: start;
    }
  }

  .buttonWhite {
    Button {
      background-color: ${(props) => props.theme.colors.white};
      color: ${(props) => props.theme.colors.primary};
      border: 2px solid ${(props) => props.theme.colors.primary};

      &:hover {
        background-color: ${(props) => props.theme.colors.primary};
        color: ${(props) => props.theme.colors.white};
        transition:  .4s;
      }
    }
  }

  @media ( width > 1024px) {
    flex-direction: row;
    margin: 0 0 120px 0;
    gap: 95px;

    .division {
      width: 4px;
      height: 100%;
      background-color: ${(props) => props.theme.colors.neutralGrayOpacity};
    }
  }
`;

export const SectionWrapperContactButton = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 0 24px;
  background: ${(props) => props.theme.colors.white};
  gap: 20px;

  @media ( width > 1024px ){
    padding: 120px 112px 0 112px;
    flex-direction: row;
    justify-content: space-between;
    background: ${(props) => props.theme.colors.white};
  }
`;

export const SectionWrapperQuestion = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 0 24px;
  background: ${(props) => props.theme.colors.white};
  gap: 20px;

  @media ( width > 1024px ){
    padding: 120px 112px 0 112px;
    flex-direction: row;
    justify-content: space-between;
    background: ${(props) => props.theme.colors.neutralGray01};
  }
`;


export const QuestionsFrequently = styled.div`
  height: 500px;
  width: 100%;
  display: flex;
  flex-direction: column;

  .contentQuestions {
    display: flex;
    flex-direction: column;
    gap: 44px;
    align-items: center;
    
    .title {
      display: flex;
      flex-direction: column;
      gap: 16px;
      margin-bottom: 16px;
      
      text-align: center;

      p {
        font-size: 0.875rem;
        color: ${(props) => props.theme.colors.neutralDark300};
        font-weight: 600;
      }

      h2 {
        font-size: 1.5rem;
        color: ${(props) => props.theme.colors.neutralDark800};
        font-weight: 600;
        line-height: 1.25;
      }

      span {
        font-size: 1rem;
        color: ${(props) => props.theme.colors.neutralDark200};
        line-height: 1.5;
      }
    }

    .alignQuestions {
      display: flex;
      justify-content: center;
      flex-direction: column;
      align-items: center;
      width: 260px;
      gap: 44px;

      .contactQuestions {
        width: 100%;
        display: flex;
        gap: 32px;
        align-items: center;

        h3 {
          font-size: 1.125rem;
          color: ${(props) => props.theme.colors.neutralDark800};
          line-height: 1.5;
          font-weight: 600;
        }

        span {
          font-size: 0.875rem;
          line-height: 1.5;
          color: ${(props) => props.theme.colors.neutralDark200};
        }
      }
    }
    

    @media ( width > 1024px) {
      .title {
        text-align: start;
        width: 400px;

        h2 {
          font-size: 2.5rem;
        }

        span {
          font-size: 1.125rem;
        }
      }

      .alignQuestions {
        width: auto;
        align-items: start;
      }
    }
  }

  @media ( width > 1024px) {
    .contentQuestions {
      align-items: start;
    }
  }
`;

export const Division = styled.div`
  @media ( max-width : 1024px) {
    width: 100%;
    height: 64px;
    background-color: ${(props) => props.theme.colors.neutralGray01};
  }
`;


