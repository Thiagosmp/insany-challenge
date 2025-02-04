import styled from 'styled-components';

export const ContentFormWrapper = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
  top: 80px;
  padding: 0 20px;

  @media ( width > 1330px ) {
    padding: 134px 112px 0 0;
    justify-content: flex-end;
    top:35px;
  }
`;

export const SectionForm = styled.div`
  display: flex;
  width: 488px;
  flex-direction: column;
  background-color: ${(props) => props.theme.colors.white};
  padding: 24px;
  border-radius: 6px;
  box-shadow: 0px 30px 50px -10px rgba(76, 74, 94, 0.2);
  z-index: 1;
  padding: 46px 43px 0 43px;

  p {
    font-size: 0.9rem;
    color: ${(props) => props.theme.colors.neutralDark50};
  }

  h2 {
    font-size: 1.5rem;
    color: ${(props) => props.theme.colors.neutralDark700};
    margin-top: 8px;
    font-weight: 600;
    line-height: 1.25;
  }

  .contentRadioButton {
    display: flex;
    gap: 33px;
    margin-top: 24px;

    label {
      display: flex;
      gap: 8px;
      font-size: 1rem;
      color: ${(props) => props.theme.colors.neutralDark100};
      cursor: pointer;
      font-weight: 600;

      input {	
        cursor: pointer;
      }

      input:checked + span {
        color: ${(props) => props.theme.colors.neutralDark700};
      }
    }
  }

  form {
    display: flex;
    flex-direction: column;
    gap: 16px;
    margin-top: 32px;

    button {
      margin-top: 8px;
      padding: 21px 0;
    }

    p {
      font-size: 0.875rem;
      color: ${(props) => props.theme.colors.error};
    }
  }

  .privacy {
    color: ${(props) => props.theme.colors.neutralDark100};
    margin-top: 30px;
    font-size: 0.875rem;
    line-height: 1.5;

    a {
      color: ${(props) => props.theme.colors.neutralDark100};
      text-decoration: underline;
    }
  }

  .security {
    display: flex;
    align-items: center;
    border-top: 3px solid ${(props) => props.theme.colors.neutralGrayOpacity};
    padding: 27px 0;
    gap: 14px;
    margin-top: 27px;

    img {
      width: auto;
      height: auto;
    }
    
    p {
      font-size: 0.875rem;
      color: ${(props) => props.theme.colors.neutralDark500};
    }
  }

  @media ( width >= 320px ) and ( width <= 545px ) {
    padding: 24px 24px 0 24px;

    h2 {
      font-size: 1.5rem;
    }
  }
`;