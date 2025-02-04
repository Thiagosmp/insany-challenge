import styled from "styled-components";

export const FooterStyled = styled.footer`
  width: 100%;
  height: 100%;
  background-color: ${(props) => props.theme.colors.neutralDark800};
  

  @media ( width >= 1480px ) {
    padding: 0 112px;
  }

`;

export const ContainerFooter = styled.div`
  display: flex;
  flex-direction: column;
  padding: 64px 24px 48px 24px;
  border-bottom: 1px solid ${(props) => props.theme.colors.neutralDark400};

  @media ( width >= 1480px ) {
    display: flex;
    justify-content: space-between;
    padding: 120px 0;
  }

`;

export const InputEmail = styled.div`
  display: flex;
  flex-direction: column;
  color: ${(props) => props.theme.colors.neutralDark50};
  align-items: center;

  @media ( max-width : 680px ) {
    .email {
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 215px;
      text-align: center;
    }
  }

  h3 {
    font-size: 1.5rem;
    color: ${(props) => props.theme.colors.white};
    margin-top: 1.5rem;
    line-height: 1.25;

  }

  p {
    font-size: 1rem;
    margin-top: 8px;
    color: ${(props) => props.theme.colors.neutralGray02};
    line-height: 1.5;
  }

  @media ( max-width : 680px ) {
    form {
      display: flex;
      flex-direction: column;
      width: 100%;
    }
  }
      
  @media ( width >= 1480px ) {
    gap: 24px;
    display: flex;
    align-items: flex-start;
  }
`;

export const EmailWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-top: 48px;

  @media ( max-width : 680px ) {
    button {
      height: 56px;
      width: 100%;
      font-size: 1rem;
    }
  }

  @media ( width >= 1200px ) {
    display: block;
    position: relative;
    margin-top: 0;

    button {
      top: 20%;
      right: 15px;
      position: absolute;
    }
  }
`;

export const EmailInput = styled.input`
  width: 100%;
  padding: 20px;
  border: none;
  border-radius: 6px;
  font-size: 1rem;
  outline: none;
  color: ${(props) => props.theme.colors.neutralDark50};
  height: 64px;

  @media ( width > 600px ) {
    padding: 20px 200px 20px 23px;
  }
`;

export const LinksFooter = styled.div`
  display: flex;
  flex-direction: row;
  gap: 24px;
  color: ${(props) => props.theme.colors.white};
  font-size: 1rem;

  a {
    text-decoration: none;
    color: ${(props) => props.theme.colors.white};
    font-size: 1rem;

    &:hover {
      color: #007bff;
    }
  }

  @media ( max-width : 680px ) {
    div {
      display: flex;
      flex-direction: column;
      gap: 24px;
    }
  }

  @media ( width > 680px ) {
    flex-direction: column;
  }
`;

export const SocialFooter = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  color: ${(props) => props.theme.colors.white};
  font-size: 1rem;
  align-items: center;
  margin-top: 56px;

  .social {
    font-size: 1rem;
    font-weight: 600;
    line-height: 1.5;
  }

  a {
    text-decoration: none;
    color: ${(props) => props.theme.colors.white};
    font-size: 1rem;
    display: flex;
    align-items: center;
    gap: 8px;

    &:hover {
      color: #007bff;
    }
  }

  @media ( max-width : 680px ) {
    div {
      display: flex;
      justify-content: center;
      gap: 32px;

      span {
        display: none;
        align-items: center;
        justify-content: center;
      }
    }
  }
      
  @media ( width > 680px ) {
    padding-left: 164px;
    align-items: normal;
    margin-top: 0;
  }
`;

export const LinksAlign = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 48px;

  @media ( width > 680px ) {
    flex-direction: row;
  }
`;

export const Copy = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: ${(props) => props.theme.colors.white};
  justify-content: space-between;
  gap: 40px;
  padding: 48px 69px 32px 69px;

  .logoFooter {
    span {
      font-size: 1.5rem;
      color: ${(props) => props.theme.colors.neutralGray02};

      .bold {
        color: ${(props) => props.theme.colors.white};
      }
    }
  }

  div {
    display: flex;
    gap: 11px;
    align-items: center;

    span {
      font-size: 0.9rem;
      color: ${(props) => props.theme.colors.neutralGray02};
    }
  }

  span {
    font-size: 0.9rem;
    color: ${(props) => props.theme.colors.white};
    text-align: center;
  }

  .LinkInsanyDesign {
    font-size: 0.9rem;

    a {
      color: ${(props) => props.theme.colors.white};
      text-decoration: underline;

      &:hover {
        color: #007bff;
      }
    }
  }

  @media ( width > 680px ) {
    display: flex;
    flex-direction: row;
    height: 135px;
    padding: 0;
    gap: 0px;

    span {
      text-align: start;
    }
  }
`;
