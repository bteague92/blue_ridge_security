import React from "react";
import styled from "styled-components";
import Logo from "../assets/logo3.png";
import { Link } from "react-router-dom";

const Container = styled.nav`
  width: 100%;
  height: 80px;
  background: black;
  border-bottom: 1px solid white;
  border-radius: 0 0 10px 10px;
  position: fixed;
  top: 0;
  display: flex;

  .logo {
    width: 25%;
    display: flex;
    justify-content: center;
    align-items: center;

    @media(max-width: 768px){
      width: 18%;
    }

    img {
      background: white;
      border-radius: 50%;
      width: 70px;
      height: 70px;

      @media(max-width: 768px){
        width: 50px;
        height: 50px;
      }
    }
  }

  .links {
    width: 75%;
    display: flex;
    justify-content: space-around;
    align-items: center;

    a {
      color: white;
      text-decoration: none;
      font-size: 1.5rem;

      @media(max-width: 768px){
        font-size: 1.2rem;
      }
    }
  }
`;

const Nav = () => {
  return (
    <Container role="navigation">
      <div className="logo">
        <img alt="logo" src={Logo} />
      </div>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/services">Services</Link>
        {/* <Link to="/church">Church</Link> */}
        <Link to="/contact">Contact</Link>
      </div>
    </Container>
  );
};

export default Nav;
