import styled from 'styled-components';

export const FeaturesContent = styled.div`
  display:flex;
  flex-direction: column;

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
`;