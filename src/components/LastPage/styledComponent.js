import styled from "styled-components";

export const Section = styled.section`
  width: 85%;
  display: flex;
  flex-direction: column;
  position: relative;
`;

export const One = styled.div`
  display: flex;

`

export const Heading = styled.h1`
  font-size: 80px;
  text-align: center;
  width: 50%;
  margin: 0px;
  line-height: 6rem;
`;

export const DetailsContianainer = styled.div`
  min-height: 50vh;
  position: absolute;
  width: 100%;
  height: auto;
  margin-top: 8rem;
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
  font-size: 100px;
  margin: 0px;
`;

export const Paragraph = styled.p`
  font-weight: 700;
  font-size: large;
  text-align: center;
`;

export const VideoContainer = styled.div`
  width: 100%;
  min-height: 50vh;
  position: relative;
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const VideoComponent1 = styled.video`
  height: 180px;
  border-radius: 10px;
  margin-top: 2rem;
`;

export const VideoComponent2 = styled.video`
  height: 320px;
  border-radius: 10px;
  width: auto;
  margin-top: 1.5rem;
`;

export const VideoComponent3 = styled.video`
  height: 250px;
  border-radius: 10px;
  top: -20px;
  position: relative;
  z-index: 0;
`;

export const IndividualContianer = styled.div`
  width: 70%;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
`;

export const IndividualContianer1 = styled.div`
  width: 90%;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
`;

export const IndividualContianer2 = styled.div`
  width: 70%;
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
`;

export const ImageComponent = styled.img`
  height: 180px;
  margin-top: 2rem;
`;

export const ImageComponent1 = styled.img`
  height: 320px;
  margin-top: 1.5rem;
`;
