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

export const Anchor = styled.a`
  position: relative;
  width: 90%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  color: #000;
  font-weight: 600;
  font-size: 18px;
  text-decoration: none;
  transition: transform 0.5s;
  margin-top: 3rem;
  &&:hover {
    transform: translateX(20px);
  }
`;

export const ArrowContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const Section = styled.section`
  width: 85%;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Heading = styled.h1`
  font-size: 38px;
  margin: 0px;
  padding-left: 20px;
`;

export const Para = styled.p`
  font-weight: 700;
  margin: 0px;
  padding-left: 20px;
`;

export const DescriptionContainer = styled.div`
  width: 40%;
  text-align: left;
`;

export const Image = styled.img`
  width: 100%;
`;

export const Description = styled.p`
  padding-left: 20px;
`;

export const Line = styled.hr`
  width: 90%;
  height: 1px;
  background-color: #000;
  padding-left: 0px;
  align-self: flex-start;
`;

export const AnchorContianer = styled.div`
  width: 80%;
`;
