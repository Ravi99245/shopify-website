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

export const Arrow = styled(FaArrowRightLong)`
  margin-left: 8px;
  animation: ${slideIn} 0.3s forwards;
  margin-top: 3px;
  width: 15px;
  height: 15px;
`;

const fillAnimation = keyframes`
  0% { width: 0%; }
  100% { width: 100%; }
`;

const emptyAnimation = keyframes`
  0% { width: 100%; }
  100% { width: 0%; }
`;

export const Section = styled.section`
  width: 85%;
  height: auto;
  display: flex;
  margin-top: 10px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Video = styled.video`
  width: 100%;
`;

export const GradientDiv = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 20;
  height: 100%;
  width: 100%;

  background: linear-gradient(
    to right,
    #60e7fc,
    #a9eeff,
    #80d1fe
  ); /* Assuming currant is #ff0050 */
  animation: ${({ filling }) => (filling ? fillAnimation : emptyAnimation)} 10s
    ease forwards;
  transition-duration: 9920ms;
`;

export const Button = styled.button`
  position: relative;
  height: 0.125rem; /* 2px */
  width: 100%; /* Replace with actual color value for bg-shade-20 */
  border: none;
`;

export const ProgressBars = styled.div`
  width: 100%;
  @media (min-width: 768px) {
    width: 100%;
  }
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: var(
    --gutter,
    1rem
  ); /* Replace '1rem' with the actual gutter value if it's defined in your project */
  margin-top: 1.75rem; /* 28px */
  margin-bottom: 1.25rem; /* 20px */
`;

export const AnchorContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  gap: var(--gutter, 1rem);
`;

export const Container = styled.div`
  width: 33%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  text-align: left;
  height: auto;
`;

export const Heading = styled.h1`
  color: #616a6b;
  font-size: 20px;
  padding: 0px;
  margin: 0px;
`;

export const Paragraph = styled.p`
  color: #000000;
  font-size: 18px;
  width: 95%;
  line-height: 1.5rem;
`;

export const AnchorElement = styled.a`
  color: #000;
  display: flex;
  align-items: center;
`;

export const SpanElement = styled.span`
  display: flex;
  align-items: center;
  font-weight: 600;
  color: #616a6b;
`;
