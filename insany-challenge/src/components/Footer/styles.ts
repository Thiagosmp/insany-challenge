import styled from "styled-components";

export const FooterStyled = styled.footer`
  width: 100%;
  height: 100%;
  padding: 0 115px;
  background-color: ${(props) => props.theme.colors.neutralDark800};
`;

export const ContainerFooter = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 120px 0;
  border-bottom: 1px solid ${(props) => props.theme.colors.neutralDark400};
`;


export const InputEmail = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  color: ${(props) => props.theme.colors.neutralDark50};

  h3 {
    font-size: 1.5rem;
    color: ${(props) => props.theme.colors.white};
    margin-top: 1.5rem
  }

  p {
    font-size: 1rem;
    margin-top: 8px;
    color: ${(props) => props.theme.colors.neutralGray02};
  }
`;

export const EmailWrapper = styled.div`
  position: relative;
  width: 100%;
  max-width: 400px;
`;

export const EmailInput = styled.input`
  width: 100%;
  padding: 20px 200px 20px 23px;
  border: none;
  border-radius: 6px;
  font-size: 1rem;
  outline: none;
  color: ${(props) => props.theme.colors.neutralDark50};
  height: 64px;
`;

export const SubmitButton = styled.button`
  position: absolute;
  top: 50%;
  right: 16px;
  transform: translateY(-50%);
  background-color: ${(props) => props.theme.colors.primary};
  color: ${(props) => props.theme.colors.white};
  padding: 10px 16px;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-size: 0.9rem;
  font-weight: bold;

  &:hover {
    background-color: ${(props) => props.theme.colors.primaryDark};
  }
`;

export const LinksFooter = styled.div`
  display: flex;
  flex-direction: column;
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
`;

export const SocialFooter = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  color: ${(props) => props.theme.colors.white};
  font-size: 1rem;
  padding-left: 164px;

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
`;

export const LinksAlign = styled.div`
  display: flex;
`;

export const Copy = styled.div`
  display: flex;
  height: 135px;
  align-items: center;
  color: ${(props) => props.theme.colors.white};
  justify-content: space-between;

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
`;
