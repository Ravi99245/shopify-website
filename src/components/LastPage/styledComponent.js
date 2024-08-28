import styled from "styled-components";

export const Section = styled.section`
  width: 85%;
  display: flex;
  flex-direction: column;
  position: relative;
`;

export const Heading = styled.h1`
  font-size: 80px;
  text-align: center;
  width: 50%;
  margin: 0px;
  line-height: 6rem;
`;

export const DetailsContianainer = styled.div`
  position: relative;
  width: 100%;
  height: auto;
  margin-top: 3rem;
  margin-bottom: 3rem;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`;

export const Shopify = styled.h1`
  background: linear-gradient(to right, #36e65b, #75cdfc);
  background-clip: text;
  color: transparent;
  font-size: 80px;
  margin: 0px;
`;

export const Paragraph = styled.p`
  font-weight: 700;
  font-size: large;
  text-align: center;
`;

export const VideoContainer = styled.div`
  width: 100%;
  position: absolute;
  top: 0%;
  margin-top: 2rem;
`;

export const VideoComponent = styled.video`
  height: 200px;
  border-radius: 10px;
`;

export const IndividualContianer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-around;
`;

export const ImageComponent = styled.img`
  height: 200px;
`;
