import styled from "styled-components/macro";
import { Link } from "react-router-dom";

export const NavContainer = styled.div`
  width: 100%;
  height: 80px;
`;

export const NavFill = styled.nav`
  z-index: 1;
  width: 100%;
  height: 80px;
  background: #241d0f;
  position: fixed;
  top: 0;
  left: 0;
  border-bottom: 4px solid #5c5646;
`;

export const NavTextContainer = styled.div`
  width: 100%;
  height: 80px;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const StyledLink = styled(Link)`
  color: #b5ad98;
  font-family: Arial;
  font-size: ${({ size }) => size || "2"}rem;
  padding: 0 3rem;

  text-decoration: none;

  &:hover {
    color: #fff;
  }
`;
