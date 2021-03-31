import styled from "styled-components/macro";
import { Link } from "react-router-dom";

export const NavContainer = styled.ul`
  width: 100%;
  z-index: 1;
  height: 80px;

  margin: 0;
  padding: 0;
  position: fixed;
  top: 0;
  left: 0;

  overflow: hidden;

  list-style-type: none;
  background: #1f1b15;

  border-bottom: 4px solid #5c5646;
`;

export const NavItem = styled.li`
  padding: 1rem 2.5rem;

  float: right;

  &:first-child {
    float: left;
  }
`;

export const StyledLink = styled(Link)`
  height: 3rem;
  display: flex;
  align-items: center;
  color: #b5ad98;
  font-family: Arial;
  font-size: ${({ size }) => (size === "small" ? "1.2" : "2")}rem;

  text-decoration: none;

  &:hover {
    color: #fff;
  }
`;
