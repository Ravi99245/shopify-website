import styled, { css } from "styled-components";

import { FaShopify, FaAngleDown, FaAngleUp } from "react-icons/fa";

export const Shopify = styled(FaShopify)`
  fill: #95bf47;
  width: 40px;
  height: 40px;
  margin-right: 8px;
`;

export const HeaderComponent = styled.header`
  margin: 0 8rem;
  top: 0;
  width: 100%;
  display: flex;
  padding: 0 3rem;
  align-items: center;
  position: fixed;
  z-index: 100;
  justify-content: space-evenly;
  background: ${(props) =>
    props.headerBg === "transparent" ? "transparent" : "#000"};
`;

export const Title = styled.h1`
  font-size: 1.6rem;
  font-style: italic;
  color: #e5e7eb;
  font-weight: 700;
`;

export const Nav = styled.nav`
  display: flex;
  align-items: center;
`;

export const AnchorElement = styled.a`
  display: flex;
  flex-direction: row;
  align-items: center;
  color: #ffff;
  text-decoration: none;
`;

export const List = styled.ul`
  display: flex;
  align-items: center;
  color: #fff;
  list-style-type: none;
  padding-left: 0px;
`;

export const ListItem = styled.li`
  display: flex;
  align-items: center;
  margin-left: 1.5rem;
`;

export const Down = styled(FaAngleDown)`
  margin-top: 5px;
  transition: background-color 0.3s ease;
  transition: transform 0.3s ease;

  ${(props) =>
    (props.solutions || props.resources) &&
    css`
      transform: rotate(180deg);
    `}
`;

export const Up = styled(FaAngleUp)`
  margin-top: 5px;
  transition: background-color 0.3s ease;
`;

export const Button = styled.button`
  background-color: transparent;
  border: none;
  display: flex;
  color: #fff;
  align-items: center;
  font-size: 1rem;
  font-weight: 300;
  cursor: pointer;
  outline: none;
  background: none;
  border: none;
  cursor: pointer;
`;

export const Pricing = styled.a`
  text-decoration: none;
  color: #fff;
  display: flex;
  align-items: center;
  &:hover {
    text-decoration: underline;
  }
`;

export const WhatsNew = styled.a`
  background-color: rgb(0 222 227);
  display: flex;
  align-items: center;
  font-size: 1rem;
  line-height: 1.5rem;
  border-radius: 9999px;
  padding: 0.6rem 16px;
  text-decoration: none;
`;

export const WhatSpan = styled.span`
  text-decoration: none;
  font-weight: 700;
  color: #000;
  margin-left: 8px;
`;

export const LoginContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
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
