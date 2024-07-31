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
  margin-left: 5px;
  animation: ${slideIn} 0.3s forwards;
  margin-bottom: 2px;
`;

export const Globe = styled.img`
  width: 40%;
  height: 100%;
`;

export const Container = styled.div`
  min-height: 100vh;
  width: 100%;
  display: flex;
  align-items: flex-start;
  flex-wrap: wrap;
`;

export const Span = styled.span`
  background: linear-gradient(to right, #d1fdfd, #a9eeff, #f0dcfc);
  padding: 0 2px;
`;

export const MerchatContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding-left: 1rem;
  padding-top: 0.25rem;
  height: 80px;
  width: 240px;
  margin: 2rem 2rem;

  &::before {
    content: "";
    position: absolute;
    left: 0;
    height: 100%;
    width: 0.3rem;
    border-radius: 0.125rem;
    background: linear-gradient(to bottom, #01bae2, #01e2a2);
  }
`;

export const Millions = styled.p`
  font-size: 2rem;
  font-weight: 600;
  margin: 0px;
  display: flex;
  align-items: center;
  overflow: hidden;
`;

export const FlipNumberWrapper = styled.div`
  display: flex;
  align-items: center;
  height: 25px;
  font-size: 2rem; /* Adjust font size as needed */
  line-height: 1;
  gap: 0;
  & .flipNumbers__number {
    margin: 0 !important;
  }
`;

export const WorldWide = styled.p`
  color: #616a6b;
  font-size: 1rem;
`;

export const InformationContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  flex-wrap: wrap;
`;

export const HeadingContianer = styled.div`
  width: 60%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
`;

export const Heading = styled.h1`
  text-align: left;
  font-size: 3rem;
  width: 80%;
`;

export const AnchorElement = styled.a`
  width: 150px;
  height: 230px;
  box-shadow: 0 4px 8px rgba(0.2, 0.2, 0.2, 0.2);
  border-radius: 8px;
  display: inline-flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 18px;
  text-decoration: none;
  padding-bottom: 16px;
  position: relative;
`;

export const LinksContainer = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Enterprise = styled.h1`
  color: #000;
  font-size: 1.125rem;
  line-height: 1.75rem;
  font-weight: 600;
  margin: 0px;
  margin-bottom: 0.5rem;
  display: flex;
  align-items: flex-end;
`;

export const SmallImage = styled.img`
  margin-bottom: 1.75rem;
  border-radius: 9999px;
  width: 3.5rem;
  height: 3.5rem;
`;

export const Paragraph = styled.p`
  color: rgb(82 82 91 / var(--tw-text-opacity));
  font-size: 0%.75;
  line-height: 1.5;
  color: #576061;
  text-align: left;
  margin: 0px;
`;

export const AnchorContainer = styled.div`
  width: 85%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 3rem;
`;

export const Explore = styled.div`
  width: 85%;
  display: flex;
  align-items: flex-start;
  margin: 0 3rem;
`;

export const ExploreHeading = styled.h1`
  font-size: 1.125rem;
  color: #1a3639;
  font-weight: normal;
  text-transform: uppercase;
  margin-top: 3rem;
`;
