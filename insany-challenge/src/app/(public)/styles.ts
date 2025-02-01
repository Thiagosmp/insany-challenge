import styled from "styled-components";

export const ContentMainWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  width: 100%;
  height: 760px;
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
  padding: 134px 121px 0 103px ;
  margin-top: 36px;

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


// export const FormRegister = styled.div`
//   display: flex;
//   width: 100%;
//   flex-direction: column;
//   background-color: ${(props) => props.theme.colors.red};
//   padding: 134px 121px 0 103px ;

//   .star {
//     width: 187px;
//     display: flex;
//     color: ${(props) => props.theme.colors.white};
//     gap: 8px;
//     font-size: 0.9rem;
//     padding: 10px 20px 10px 16px;
//     border: 1px solid ${(props) => props.theme.colors.white}; ;
//     border-radius: 40px;
//   }

//   h1 {
//     font-size: 3.5rem;
//     font-weight: 700;
//     color: ${(props) => props.theme.colors.white};
//     margin-top: 20px;
//   }

//   span {
//     font-size: 1.125rem;
//     color: ${(props) => props.theme.colors.white};
//     margin-top: 13px;
//   }

//   .division {
//     width: 32px;
//     height: 2px;
//     background-color: ${(props) => props.theme.colors.primary};
//     margin: 20px 0;
//   }

//   .bancDetails {
//     display: flex;
//     gap: 64px;

//     div {
//       display: flex;
//       flex-direction: column;

//       h2 {
//       font-size: 2.5rem;
//       color: ${(props) => props.theme.colors.white};
//       }

//       span {
//         font-size: 1rem;
//         color: ${(props) => props.theme.colors.white};
//       }
//     }
//   }
// `;