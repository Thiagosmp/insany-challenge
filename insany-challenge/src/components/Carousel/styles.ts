import styled from "styled-components";
import { motion } from "framer-motion";

interface DotProps {
  active: boolean;
}

export const CarouselContainer = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  overflow: hidden;
  
  .alignButtons {
    display: flex;
    margin-bottom: 16px;
    justify-content: flex-end;
    background-color: ${(props) => props.theme.colors.neutralGray01};
    gap: 33px;

    .leftButton {
      display: flex;
      align-items: center;
      border: none;
      background-color: transparent;
      cursor: pointer;
    }

    .rightButton {
      display: flex;
      rotate: 180deg;
      align-items: center;
      border: none;
      background-color: transparent;
      cursor: pointer;
    }
  }
`;

export const ImageTrack = styled(motion.div)`
  display: flex;
  gap: 33px;
  margin-top: 56px;
  height: 520px;
`;

export const Image = styled(motion.img)`
  .imgCarousel {
    width: 280px;
    height: 340px;
    object-fit: cover;
    border-radius: 10px;
  }
`;

export const ContentNoticesCarousel = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 1rem;

  .notice {
    display: flex;
    align-items: center;
    gap: 16px;
    margin-top: 24px;

    span {
      color: ${(props) => props.theme.colors.neutralDark300};
    }

    .bold {
      font-size: 1rem;
      font-weight: 600;
      color: ${(props) => props.theme.colors.primary};
    }
  }

  .descriptionNotice {
    font-size: 1rem;
    color: ${(props) => props.theme.colors.neutralDark700};
    line-height: 150%;
    margin-top: 12px;
  }

  .autorData {
    display: flex;
    gap: 16px;
    margin-top: 24px;

    span {
      color: ${(props) => props.theme.colors.neutralDark300};
    }

    div {
      display: flex;
      flex-direction: column;
      justify-content: space-between;

      .nameAutor {
        font-size: 1rem;
        font-weight: 600;
        color: ${(props) => props.theme.colors.neutralDark700};
      }

      span {
        font-size: 0.875rem;
        color: ${(props) => props.theme.colors.neutralDark400};
      }
    }
  }
`;

export const DotsContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-top: 90px;
`;

export const Dot = styled.div.withConfig({
  shouldForwardProp: (prop) => prop !== "active",
}) <DotProps>`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background-color: ${(props) => (props.active ? props.theme.colors.white : props.theme.colors.primary)};
  border: 1px solid ${(props) => props.theme.colors.primary};
  cursor: pointer;
  transition: background-color 0.3s ease;
`;
