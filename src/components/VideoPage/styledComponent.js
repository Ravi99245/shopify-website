import styled, { keyframes } from "styled-components";

import { FaArrowRightLong } from "react-icons/fa6";
import { FiHash } from "react-icons/fi";

export const Hashtag = styled(FiHash)`
  color: #944bfd;
  width: 20px;
  height: 20px;
`;

export const InnerContainer = styled.div`
  background: #e6f7ff;
  height: 40px;
  width: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50px;
`;

export const Section = styled.section`
  width: 85%;
  display: flex;
  flex-direction: column;
`;

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
  font-weight: 500;
  font-size: 18px;
  text-decoration: none;
  transition: transform 0.5s;
  margin-top: 1rem;
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

export const AnchorContianer = styled.div`
  width: 40%;
`;

export const Line = styled.hr`
  width: 90%;
  height: 0.7px;
  background-color: #000;
  padding-left: 0px;
  align-self: flex-start;
  margin-top: 1rem;
`;

export const HeadingContianer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin: 0px;
`;

export const Paragraph = styled.p`
  font-size: 18px;
  font-weight: 500;
  margin-top: 3rem;
  color: #3c5f5f;
`;

export const TopContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
`;

export const Heading = styled.h1`
  font-size: 43px;
`;

export const IconContianer = styled.div`
  background: #edf6fa;
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
`;

export const DetaialsContainer = styled.div`
  width: 45%;
`;
