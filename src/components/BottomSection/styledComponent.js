import styled from "styled-components";

import { FaArrowRight, FaArrowLeft } from "react-icons/fa6";

export const Right = styled(FaArrowRight)`
  width: 20px;
  height: 20px;
`;

export const Left = styled(FaArrowLeft)`
  width: 20px;
  height: 20px;
`;

export const Section = styled.section`
  width: 85%;
  display: flex;
  flex-direction: column;
  height: auto;
`;

export const Quote = styled.blockquote`
  quotes: "“" "”";
  text-align: left;
  font-size: 45px;
  margin: 0px;
  font-weight: 700;
  line-height: 45px;
  width: 100%;
  height: 260px;
  &::before {
    content: open-quote;
  }
  &::after {
    content: close-quote;
  }
`;

export const DetaialsContainer = styled.div`
  width: 85%;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
`;

export const ImageWrapper = styled.div`
  position: relative;
  width: 40%;
  height: 300px;
  perspective: 1000px;
`;

export const InformationContaner = styled.div`
  width: 65%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`;

export const Company = styled.p`
  font-size: 30px;
  font-weight: 600;
  margin: 0px;
  margin-top: 10px;
`;

export const Owner = styled.span`
  font-size: 20px;
  font-weight: 500;
  margin: 0px;
  margin-top: 10px;
`;

export const Image = styled.img`
  position: absolute;
  width: 80%;
  height: ${(props) => (props.isBack ? "380px" : "400px")};
  object-fit: cover;
  transition: all 1s ease;
  top: ${(props) => (props.isBack ? "12%" : 0)};
  opacity: ${(props) => (props.isBack ? 0.5 : 1)};
  transform: ${(props) => (props.isBack ? "rotate(15deg)" : "rotate(0deg)")};
  z-index: ${(props) => (props.isBack ? 1 : 2)};
  border-radius: 8px;
  margin-top: 0px;
`;

export const Button = styled.button`
  margin-top: 10px;
  margin-right: 10px;
  padding: 13px;
  border-radius: 50%;
  background-color: transparent;
  cursor: pointer;
  outline: none;
`;
