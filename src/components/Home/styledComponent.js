import styled from "styled-components";

export const Section = styled.section`
  margin-bottom: 10px;
  padding-top: var(--global-header);
  position: relative;
  z-index: 10;
  display: flex;
  flex-direction: column;
  align-items: center;
  place-items: center;
  min-height: 720px;
  max-height: 90dvh;
  overflow: hidden;
  background-size: cover;
  background-image: url("https://cdn.shopify.com/b/shopify-brochure2-assets/bc2165e8963e937c15a77355632344df.webp?originalWidth=1620&originalHeight=2160&width=1080&height=1440");

  @media (min-width: 711px) {
    background-image: url("https://cdn.shopify.com/b/shopify-brochure2-assets/339113bc828c2c7ab760a434e1703b93.webp?originalWidth=3840&originalHeight=2160&width=1920&height=1080");
  }
`;

export const Picture = styled.picture`
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  min-height: 100%;
  object-fit: center;
  aspect-ratio: 3 / 4;
  z-index: -20;

  @media (min-width: 481px) {
    aspect-ratio: 16 / 9;
  }

  img {
    width: 100%;
    object-fit: cover;
  }
`;

export const Overlay = styled.div`
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: -10;
`;

export const Container = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0;
  top: 15%;
  left: 5%;
  z-index: 30;
  width: 90%;
`;

export const Content = styled.div`
  grid-column: span 4;
  display: flex;
  flex-direction: column;
  gap: var(--xl);

  @media (min-width: 640px) {
    grid-column: span 6;
  }

  @media (min-width: 768px) {
    grid-column: span 5;
  }
`;

export const Title = styled.h1`
  color: white;
  font-size: var(--t1);
`;

export const Paragraph = styled.p`
  color: white;
  font-size: 1.5rem;
  line-height: 1.2;
  text-align: left;
  width: 40%;
  margin-top: 0px;
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--lg);
  margin-top: 0;
  margin-bottom: var(--3xl);

  @media (min-width: 640px) {
    flex-direction: row;
  }

  @media (min-width: 768px) {
    margin-bottom: 0;
    transform: translateY(-1.5rem);
  }
`;

export const Button = styled.a`
  display: inline-block;
  padding: var(--button-px) var(--button-py);
  border: 2px solid transparent;
  border-radius: var(--button-radius);
  font-size: var(--button-size);
  font-weight: var(--button-weight);
  text-align: center;
  color: var(--button-dark-primary-text);
  background: var(--button-dark-primary-bg);
  transition: all 0.15s ease-in-out;

  &:hover {
    border-color: var(--button-dark-primary-border-hover);
    background: transparent;
    color: white;
  }

  &:focus {
    outline: 2px solid var(--state-focus);
  }

  &:active {
    background: rgba(161, 161, 170, 1);
    color: black;
  }

  &:disabled {
    color: var(--button-dark-primary-text-disabled);
    background: var(--button-dark-primary-bg-disabled);
    border-color: var(--button-dark-primary-border-disabled);
  }

  @media (min-width: 768px) {
    padding: var(--button-lg-px) var(--button-lg-py);
    font-size: var(--button-lg-size);
    width: auto;
  }
`;

export const Disclaimer = styled.div`
  p {
    color: white;
    font-size: var(--body-sm);
    text-align: center;

    @media (min-width: 640px) {
      text-align: left;
    }

    @media (min-width: 768px) {
      width: 13rem;
    }
  }
`;

export const VideoButton = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: var(--lg);
  padding: 0.5rem 1.25rem;
  border: 1px solid rgba(255, 255, 255, 0.4);
  border-radius: var(--button-radius-full);
  background: rgba(255, 255, 255, 0.15);
  color: white;
  font-size: 1.125rem;
  text-align: center;
  transition: all 0.2s linear;

  &:hover {
    background: white;
    color: black;
  }
`;

export const Main = styled.div`
  width: 100vw;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Heading = styled.h1`
  font-size: 3.5rem;
  color: #fff;
  text-align: left;
  line-height: 1.2;
  width: 40%;
`;

export const FreeTrail = styled.a`
  text-decoration: none;
  background-color: #fff;
  border-radius: 999px;
  padding: 0.6rem 1rem;
  font-size: 1rem;
  line-height: 1.5rem;
  font-weight: 700;
  color: #000;
`;

export const FreeTrailContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: left;
  color: #fff;
  width: 100%;
`;

export const Trail = styled.p`
  width: 25%;
  padding-left: 1rem;
  text-align: left;
  font-size: medium;
`;

export const BottomContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const StoryContainer = styled.div`
  display: flex;
  align-items: center;
  width: 20rem;
`;

export const PlayContianer = styled.a`
  background-color: transparent;
  text-decoration: none;
  border: 1px solid #f2f4f4;
  border-radius: 100px;
  padding: 0.75rem 0.75rem;
  width: auto;
  font-size: 1rem;
  line-height: 1;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const DetaialsContainer = styled.div`
  width: 100%;
`;
