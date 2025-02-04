import styled from 'styled-components';

export const FeaturesContent = styled.div`
  display:flex;
  flex-direction: column;
  align-items: center;
  max-width: 630px;

  h3 {
    margin-top: 16px;
    font-size: 1.5rem;
    font-weight: 600;
  }

  span {
    margin-top: 6px;
    font-size: 1rem;
    color: ${(props) => props.theme.colors.neutralDark300};
    line-height: 1.5;
  }

  @media ( width > 1024px ){
    align-items: flex-start;

    span {
      display: flex;
      text-align: start;
    }
  }
`;