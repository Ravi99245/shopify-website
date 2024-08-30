import styled from "styled-components";

import { GrBlog } from "react-icons/gr";
import { FaAngleRight } from "react-icons/fa";
import { IoMdBook } from "react-icons/io";
import { FaPeopleLine } from "react-icons/fa6";
import { IoMdHelpCircleOutline } from "react-icons/io";

export const HelpIcon = styled(IoMdHelpCircleOutline)`
  width: 20px;
  height: 20px;
  color: #000;
`;
export const PeopleIcaon = styled(FaPeopleLine)`
  width: 20px;
  height: 20px;
  color: #000;
`;

export const BookIcon = styled(IoMdBook)`
  width: 20px;
  height: 20px;
  color: #000;
`;

export const Right = styled(FaAngleRight)`
  position: absolute;
  margin-left: 20px;
  left: ${(props) => (props.isHovered ? "55px" : "50px")};
  transition: all 0.3s ease;
`;

export const BlogIcon = styled(GrBlog)`
  width: 20px;
  height: 20px;
  color: #000;
`;

export const BlogIconContianer = styled.div`
  background: linear-gradient(135deg, #36f378, #8df6f6);
  width: 50px;
  height: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
`;

export const BlogIconContianer1 = styled.div`
  background: linear-gradient(135deg, #369eff, #5bf3b0);
  width: 50px;
  height: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
`;

export const BlogIconContianer2 = styled.div`
  background: linear-gradient(135deg, #5bf3b0, #369eff);
  width: 50px;
  height: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
`;

export const BlogIconContianer3 = styled.div`
  background: linear-gradient(90deg, #5bf3b0, #369eff);
  width: 50px;
  height: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
`;

export const Section = styled.section`
  width: 90%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  color: #fff;
  margin-top: 3rem;
`;

export const HeadingContianer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Paragraph = styled.p`
  font-weight: 700;
  font-size: 16px;
  margin-bottom: 0px;
`;

export const Heading = styled.h1`
  font-size: 45px;
  font-weight: 700;
  margin-top: 0px;
`;

export const BlogContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 10px 15px;
  flex-wrap: wrap;
`;

export const AnchorContainer = styled.div`
  width: 40%;
  height: 300px;
  border-radius: 15px;
  background-color: #090f13;
  border-color: #091b25;
  border-width: 1.5px;
  border-style: solid;
  padding: 3rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  cursor: pointer;
`;

export const BlogHeading = styled.h1`
  font-size: 35px;
`;

export const BlogParagraph = styled.p`
  font-size: 19px;
  text-align: left;
  margin: 0px;
  line-height: 2rem;
`;

export const Button = styled.button`
  background-color: ${(props) => (props.isHovered ? "#042121" : "transparent")};
  border: solid 1px #0c2424;
  border-radius: 50px 50px 50px 50px;
  color: #fff;
  padding-left: 0px;
  padding: 8px 0px 8px 0px;
  font-size: 18px;
  margin-top: 20px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  transition: background-color 1s ease;
  position: relative;
  overflow: hidden;
  width: 100px;
`;
