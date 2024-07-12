import styled from "styled-components";

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
