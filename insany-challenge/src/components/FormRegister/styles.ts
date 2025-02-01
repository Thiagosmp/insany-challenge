import styled from 'styled-components';

export const ContentFormWrapper = styled.div`
  padding: 134px 121px 0 43px;
  display: flex;
  justify-content: flex-end;
  position: relative;
  top: 35px;
`;

export const SectionForm = styled.div`
  display: flex;
  width: 488px;
  flex-direction: column;
  background-color: ${(props) => props.theme.colors.white};
  padding: 40px 43px 0 43px;
  border-radius: 6px;

  p {
    font-size: 0.9rem;
    color: ${(props) => props.theme.colors.neutralDark50};
  }

  h2 {
    font-size: 1.5rem;
    color: ${(props) => props.theme.colors.neutralDark700};
    margin-top: 8px;
    font-weight: 600;
    line-height: 125%;
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
  }

  .privacy {
    color: ${(props) => props.theme.colors.neutralDark100};
    margin-top: 30px;
    font-size: 0.875rem;
    line-height: 125%;

    a {
      color: ${(props) => props.theme.colors.neutralDark100};
      text-decoration: underline;
    }
  }

  .security {
    display: flex;
    align-items: center;
    border-top: 2px solid ${(props) => props.theme.colors.neutralGray02};
    padding: 27px 0;
    gap: 14px;
    margin-top: 27px;
    
    p {
      font-size: 0.875rem;
      color: ${(props) => props.theme.colors.neutralDark500};
    }
  }

`;