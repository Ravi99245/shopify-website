import styled from "styled-components";

export const Section = styled.section`
  width: 85%;
  display: flex;
  flex-direction: column;
  height: auto;
`;

export const Quote = styled.blockquote`
  font-style: italic;
  quotes: "“" "”";
  &::before {
    content: open-quote;
  }
  &::after {
    content: close-quote;
  }
`;

export const DetaialsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const ImageWrapper = styled.div`
  position: relative;
  width: 40%;
  height: 300px;
  perspective: 1000px;
`;

export const InformationContaner = styled.div`
  width: 40%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`;

export const Image = styled.img`
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: all 1s ease;
  opacity: ${(props) => (props.isBack ? 0.5 : 1)};
  transform: ${(props) => (props.isBack ? "rotate(15deg)" : "rotate(0deg)")};
  z-index: ${(props) => (props.isBack ? 1 : 2)};
  border-radius: 15px;
`;

export const Button = styled.button`
  margin-top: 10px;
  margin-right: 10px;
  padding: 10px;
`;
