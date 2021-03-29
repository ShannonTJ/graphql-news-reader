import React, { useState, useEffect } from "react";
import { NavContainer, NavItem, StyledLink } from "./NavbarStyle";
import { useHistory, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import decode from "jwt-decode";

const Navbar = () => {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));

  const history = useHistory();
  const location = useLocation();
  const dispatch = useDispatch();

  const logout = () => {
    dispatch({ type: "LOGOUT" });
    history.push("/");
    setUser(null);
  };

  useEffect(() => {
    const token = user?.token;

    //check for JWT
    if (token) {
      const decodedToken = decode(token);

      //check for JWT expiry and logout if expired
      if (decodedToken.exp * 1000 < new Date().getTime()) {
        logout();
      }
    }

    setUser(JSON.parse(localStorage.getItem("profile")));
  }, [location]);

  return (
    <NavContainer>
      <NavItem>
        <StyledLink to="/">kanpai</StyledLink>
      </NavItem>
      {user ? (
        <>
          <NavItem>
            <StyledLink to="/" onClick={logout} size="small">
              log out
            </StyledLink>
          </NavItem>
          <NavItem>
            <StyledLink to="/" size="small">
              profile
            </StyledLink>
          </NavItem>
        </>
      ) : (
        <>
          <NavItem>
            <StyledLink to="/login" size="small">
              log in
            </StyledLink>
          </NavItem>
          <NavItem>
            <StyledLink to="/about" size="small">
              about
            </StyledLink>
          </NavItem>
        </>
      )}
    </NavContainer>
  );
};

export default Navbar;
