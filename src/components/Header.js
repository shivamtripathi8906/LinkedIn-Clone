import "../login/navbar.css";
import LI1 from "../images/linkedin.png";
import S1 from "../images/search-icon.svg";
import styled from "styled-components";
import H1 from "../images/nav-home.svg";
import H2 from "../images/nav-network.svg";
import H3 from "../images/nav-notifications.svg";
import H4 from "../images/nav-jobs.svg";
import H5 from "../images/ab.png";
import { useState } from "react";
import { signOutAPI } from "../actions";

import { Link } from "react-router-dom";
import { connect } from "react-redux";
const Header = (props) => {
  let [myStyle, setStyle] = useState({
    display: "none",
    transition: "100ms ease-in-out",
  });
  function ham_burger() {
    if (myStyle.display === "none") {
      setStyle({
        display: "block",
      });
    } else if (myStyle.display === "block") {
      setStyle({
        display: "none",
      });
    }
  }

  return (
    <>
      <Navbarinside>
        <Leftnav>
          <Logopart>
            <img src={LI1} alt="logolinkedin" />
          </Logopart>
          <Searchpart>
            <img src={S1} alt="search" />
            <input type="text" name="" id="" placeholder="Search" />
          </Searchpart>
        </Leftnav>
        <Rightnav>
          <Content1>
            <Link to="/feed">
              <img src={H1} alt="home" />
              <span>
                <p>Home</p>
              </span>
            </Link>
          </Content1>

          <Content1>
            <Link to="/feed">
              <img src={H2} alt="network" />
              <span>
                <p>Network</p>
              </span>
            </Link>
          </Content1>
          <Content1>
            <Link to="/feed">
              <img src={H3} alt="jobs" />
              <span>
                <p>Jobs</p>
              </span>
            </Link>
          </Content1>
          <Content1>
            <Link to="/notification">
              <img src={H4} alt="not" />
              <span>
                <p> Notifications </p>
              </span>
            </Link>
          </Content1>
          <Content1 className="usricon" onClick={ham_burger}>
            <Link to="/feed">
              {props.user && props.user.photoURL ? (
                <img src={props.user.photoURL} alt="user" />
              ) : (
                <img src={H5} alt="user" />
              )}
              <span>
                <p> Me</p>
              </span>
            </Link>
          </Content1>
          <Signout style={myStyle} onClick={() => props.signOut()}>
            <p>Sign out</p>
          </Signout>
        </Rightnav>
      </Navbarinside>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.userState.user,
  };
};

const mapDispatchToProps = (dispatch) => ({
  signOut: () => dispatch(signOutAPI()),
});

const Signout = styled.button`
  outline: none;
  border: none;
  position: absolute;
  right: 14.5%;
  box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
  bottom: -74%;
  background-color: white;
  cursor: pointer;
  color: #0a66c2;
  background-color: #d7e8f8;

  border-radius: 50rem 1rem 50rem 50rem;
  padding: 0.7rem 1.7rem 0.7rem 1.8rem;
  @media (max-width: 950px) {
    bottom: 100%;
    right: 8%;
    border-radius: 50rem 50rem 1px 50rem;
    box-shadow: 3px -10px -15px rgba(0, 0, 0, 0.1);
  }
  & > p {
    font-size: 1rem;
  }
`;

const Navbarinside = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  padding: 0.08% 9% 0% 9%;
  justify-content: space-between;
  background-color: white;
  position: fixed;
  z-index: 1000;
  @media (max-width: 950px) {
    padding: 0% 4% 0% 4%;
  }
`;

const Leftnav = styled.div`
  width: 36%;
  height: auto;
  display: flex;
  background-color: white;

  align-items: center;
  @media (max-width: 950px) {
    width: 100%;
  }
  & > img {
    width: 100%;
    height: 100%;
    justify-content: space-between;
  }
`;

const Logopart = styled.div`
  margin-top: 0.7rem;
  margin-bottom: 0.35rem;
  width: 10%;
  height: 2.3rem;
`;

const Searchpart = styled.div`
  margin-left: 3%;
  margin-top: 0.5rem;
  width: 70%;
  height: fit-content;
  border: 2px solid #eff4f8;
  display: flex;
  justify-content: center;
  background-color: #eff4f8;
  align-items: center;
  border-radius: 4px;

  & > input {
    line-height: 2rem;
    font-size: 0.9rem;
    width: 85%;
    border: none;
    outline: none;
    background-color: #eff4f8;
    margin-left: 5px;
  }
  &img {
    width: 1.1rem;

    height: 1.1rem;
  }
  @media (max-width: 950px) {
    width: 76%;
    margin-top: 0.1rem;
  }
`;

const Rightnav = styled.div`
  width: 60%;
  height: auto;
  display: flex;
  background-color: white;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 0% 5% 0% 5%;
  align-items: center;
  @media (max-width: 950px) {
    width: 100%;
    z-index: 101;
    bottom: 0;
    left: 0;
    position: fixed;
    padding: 0% 0% 0% 0%;
  }
  @media (max-width: 300px) {
    width: 107%;
  }
`;

const Content1 = styled.div`
  padding-top: 0.4rem;
  padding-bottom: 0.4rem;
  width: 13%;
  border-bottom: 0.5px solid white;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  transition: 300ms;
  flex-wrap: nowrap;
  &:hover {
    border-bottom: 0.5px solid black;
  }
  @media (max-width: 950px) {
    border-top: 2px solid white;
    width: 20%;
    &:hover {
      border-bottom: 0px solid white;
      border-top: 2px solid black;

      padding-top: 0rem;
    }
  }

  & > span > p {
    text-align: center;
    font-size: 0.7rem;
  }
  & > a {
    text-decoration: none;
    width: 100%;
    height: 100%;
    text-align: center;
    font-size: 0.7rem;
    color: rgb(109, 109, 109);
  }
`;

export default connect(mapStateToProps, mapDispatchToProps)(Header);
