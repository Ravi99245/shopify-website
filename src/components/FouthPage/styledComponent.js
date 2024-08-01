import styled, { keyframes } from "styled-components";
import { FaArrowRightLong } from "react-icons/fa6";

const slideIn = keyframes`
  from {
    transform: translateX(-20px);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
`;

export const Arrow1 = styled(FaArrowRightLong)`
  margin-left: 8px;
  animation: ${slideIn} 0.3s forwards;
  margin-top: 3px;
  width: 15px;
  height: 15px;
`;
export const Arrow2 = styled(FaArrowRightLong)`
  margin-left: 8px;
  animation: ${slideIn} 0.3s forwards;
  margin-top: 3px;
  width: 15px;
  height: 15px;
`;

export const Section = styled.section`
  width: 85%;
  height: auto;
`;

export const DescriptionContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const HeadingContaner = styled.div`
  text-align: left;
`;

export const Heading = styled.h1`
  font-size: 38px;
  margin: 0px;
`;

export const Para = styled.p`
  font-weight: 700;
`;
