import styled from "styled-components";

export const HeaderBack = styled.div`
  width: 100%;
  display: flex;
  height: 96px;
  background-color: ${(props) => props.theme.colors.neutralDark800};
  justify-content: center;
`;

export const Buttonx = styled.button`
  background-color: #1D63FF;
  color: white;
  border: none;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  transition: background-color 0.3s ease;
  

  button::before {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  width: 300%;
  height: 300%;
  background: radial-gradient(circle, rgba(255, 255, 255, 0.5), transparent);
  transition: width 0.5s ease, height 0.5s ease, top 0.5s ease, left 0.5s ease;
  border-radius: 50%;
  transform: translate(-50%, -50%);
  z-index: 0;
  opacity: 0;
  }

  button:hover::before {
    width: 100%;
    height: 100%;
    top: 50%;
    left: 50%;
    opacity: 1;
  }

  button:hover {
    background-color: #1D63FF;
  }

  button span {
    position: relative;
    z-index: 1;
  }
`;