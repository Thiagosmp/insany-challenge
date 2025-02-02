import styled from "styled-components";

export const ContentQuestionExpand = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  width: 100%;
  margin-bottom: 120px;

  .content {
    background-color: ${(props) => props.theme.colors.white};
    border-radius: 6px;

    .questions {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 41px 33px;

      div {
        display: flex;
        align-items: center;
        gap: 24px;

        span {
          font-size: 1.5rem;
          color: ${(props) => props.theme.colors.primary};
        }

        h3 {
          font-size: 1.25rem;
          font-weight: 400;
          color: ${(props) => props.theme.colors.neutralDark800};
        }
      }

      button {
        display: flex;
        width: 20px;
        align-items: center;
        justify-content: center;
        background-color: transparent;
        border: none;
        color: ${(props) => props.theme.colors.neutralDark200};
        font-size: 1.75rem;
        cursor: pointer;

        &:hover {
          color: ${(props) => props.theme.colors.primary};
        }
      }
    }
}`;

export const Response = styled.div<{ $active?: boolean }>`
  display: ${({ $active }) => ($active ? "block" : "none")};
  flex-direction: column;
  gap: 24px;
  border-radius: 8px;
  color: ${(props) => props.theme.colors.neutralDark500};
  padding: 0 33px 48px 33px;

  p {
    width: 95%;
    font-size: 1rem;
    font-weight: 400;
    line-height: 150%
  }
`;