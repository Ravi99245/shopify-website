import styled, { keyframes } from "styled-components";

const fillAnimation = keyframes`
  0% { width: 0%; }
  100% { width: 100%; }
`;

const emptyAnimation = keyframes`
  0% { width: 100%; }
  100% { width: 0%; }
`;

export const Section = styled.section`
  width: 100%;
  height: auto;
  padding: 3rem;
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
  transform-origin: left;
  transform: scaleX(1);
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
  width: 75%;

  @media (min-width: 768px) {
    width: 100%;
  }

  display: flex;
  justify-content: space-between;
  gap: var(
    --gutter,
    1rem
  ); /* Replace '1rem' with the actual gutter value if it's defined in your project */
  margin-top: 1.75rem; /* 28px */
  margin-bottom: 1.25rem; /* 20px */
`;
