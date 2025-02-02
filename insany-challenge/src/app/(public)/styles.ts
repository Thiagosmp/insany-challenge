import styled from "styled-components";

export const ContentMainWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  width: 100%;
  background-image: url('/img/bg-main.png');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-color: ${(props) => props.theme.colors.neutralDark800};
`;

export const ContentHeroWrapper = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  background-color: ${(props) => props.theme.colors.red};
  padding: 170px 121px 156px 112px ;

  .star {
    width: 200px;
    display: flex;
    color: ${(props) => props.theme.colors.white};
    gap: 8px;
    font-size: 0.9rem;
    padding: 10px 20px 10px 16px;
    border: 2px solid ${(props) => props.theme.colors.neutralDarkBorder}; ;
    border-radius: 40px;
  }

  h1 {
    font-size: 3.5rem;
    font-weight: 700;
    color: ${(props) => props.theme.colors.white};
    margin-top: 20px;
    line-height: 125%;
  }

  span {
    font-size: 1.125rem;
    color: ${(props) => props.theme.colors.white};
    margin-top: 13px;
  }

  .division {
    width: 32px;
    height: 2px;
    background-color: ${(props) => props.theme.colors.primary};
    margin: 56px 0;
  }

  .bancDetails {
    display: flex;
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
`;

export const Advantages = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  width: 100%;
  height: 994px;
  padding: 120px 112px 120px 112px;
  background-image: url('/img/advantagesBanner.png');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-color: ${(props) => props.theme.colors.neutralDark800};
`;

export const AdvantagesExclusive = styled.div`
  display: flex;
  width: 500px;
  color: ${(props) => props.theme.colors.neutralDark800};
  
  div {
    display: flex;
    flex-direction: column;
    
    h2 {
      color: ${(props) => props.theme.colors.white};
      line-height: 125%;
      font-size: 2.5rem;
      font-weight: 600;
    }

  .specificationAdvantages {
    display: flex;
    gap: 32px;
    margin-top: 76px;
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
      padding: 33px 42px 33px 34px;
      margin-top: 24px;
      display: flex;
      gap: 17px;

      h3 {
        font-weight: 700;
        font-size: 1.5rem;
      }

      span {
        font-size: 1.125rem;
        line-height: 150%;
      }
    }
  }
}
`;

