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

const slideCome = keyframes`
  from {
    transform: translateX(20px);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
`;

const slideOut = keyframes`
  from {
    transform: translateX(0);
    opacity: 1;
  }
  to {
    transform: translateX(20px);
    opacity: 0;
  }
`;

const slideGo = keyframes`
  from{
    transform: translateX(0);
    opacity: 1;
  }
  to{
    transform: translateX(-20px);
    opacity: 0;
  }
`;

export const Arrow1 = styled(FaArrowRightLong)`
  animation: ${(props) => (props.arrow1 ? slideIn : slideGo)} 0.5s forwards;
  margin-right: 0px;
  margin-top: 5px;
  width: 18px;
  height: 18px;
`;
export const Arrow2 = styled(FaArrowRightLong)`
  margin-left: 8px;
  animation: ${(props) => (props.arrow2 ? slideCome : slideOut)} 0.5s forwards;
  margin-top: 3px;
  width: 18px;
  height: 18px;
`;

export const Section = styled.section`
  width: 85%;
  height: auto;
  margin-bottom: 4rem;
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
  width: 35%;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  justify-content: flex-start;
  height: 200px;
`;

export const Heading = styled.h1`
  font-size: 38px;
  margin: 0px;
`;

export const Para = styled.p`
  font-weight: 700;
  margin: 0px;
`;

export const Anchor = styled.a`
  position: relative;
  width: 80%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  color: #000;
  font-weight: 600;
  font-size: 18px;
  text-decoration: none;
  transition: transform 0.5s;
  &&:hover {
    transform: translateX(20px);
  }
`;

export const Line = styled.hr`
  width: 90%;
  height: 1px;
  background-color: #000;
  padding-left: 0px;
  align-self: flex-start;
`;

export const ArrowContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const Paragraph = styled.p`
  padding-left: 20px;
`;

export const StyledContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: var(--gutter, 16px);
  max-width: 100vw;
  overflow-x: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
  scroll-snap-type: x mandatory;
  @media (min-width: 768px) {
    max-width: 100%;
    overflow-x: visible;
  }
`;

export const StyledImage = styled.img`
  width: 80vw;
  aspect-ratio: 1 / 1;
  scroll-snap-align: center;
  &:first-child {
    margin-left: var(--gutter, 16px);
  }
  &:last-child {
    margin-right: var(--gutter, 16px);
  }
  @media (min-width: 768px) {
    width: calc(33.333% - var(--gutter, 16px));
    &:first-child {
      margin-left: 0;
    }
    &:last-child {
      margin-right: 0;
    }
  }
`;

export const StyledVideo = styled.video`
  background: transparent;
  display: block;
  height: 100%;
  max-height: none;
  max-width: none;
  position: static;
  visibility: visible;
  width: 100%;
  object-fit: contain;
`;
