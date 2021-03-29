import styled from "styled-components/macro";

export const NavContainer = styled.div`
  width: 100%;
  height: 80px;
`;

export const NavFill = styled.nav`
  z-index: 1;
  width: 100%;
  height: 80px;
  background: #302e28;
  position: fixed;
  top: 0;
  left: 0;
  border-bottom: 4px solid #5c5646;
`;

export const NavText = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  color: #b5ad98;
  font-family: Arial;
  font-size: 2rem;
  padding: 0rem 1rem;
`;
