import styled from "styled-components";
import logo from "../images/linkedin.jpg";
import "../login/login.css";
import hero from "../images/he1.svg";
import gog from "../images/googlelogo.jpg";
import { connect } from "react-redux";
import { signInAPI } from "../actions";
import { Redirect } from "react-router";

const Login = (props) => {
  return (
    <>
      <Container>
        {props.user && <Redirect to="/feed" />}
        <Nav>
          <Logo1>
            <a href="/">
              <img src={logo} alt="logo" />
            </a>
          </Logo1>
          <Navbutton>
            <Join>Join now</Join>
            <Signup>Sign in</Signup>
          </Navbutton>
        </Nav>
        <Maincont>
          <Content>
            <Welcome>
              <p>Welcome to your professional community </p>
            </Welcome>
            <Herophoto>
              <img src={hero} alt="hero" />
            </Herophoto>
            <Googlebtton onClick={() => props.signIn()}>
              <img src={gog} alt="google" />
              &nbsp; Sign in with Google
            </Googlebtton>
          </Content>
        </Maincont>
      </Container>
    </>
  );
};
const Maincont = styled.div`
  width: 100%;
  height: auto;

  margin-top: 4rem;
  position: relative;
`;
const Content = styled.div`
  display: flex;
  width: 100%;
  height: auto;
`;
const Welcome = styled.div`
  width: 60%;

  z-index: 2;
  color: #8f5849;
  & > p {
    font-size: 3.5rem;
  }
  @media (max-width: 900px) {
    width: 100%;
    text-align: center;
    & > p {
      font-size: 1.8rem;
    }
  }
`;
const Herophoto = styled.div`
  width:53%;
  
  position:absolute;
  z-index=-1;
  right:-3%;
  top:.35rem;
  &>img{
    width:100%;
    height:100%;
  }
  @media(max-width:900px){
    width:95%;
    top:13rem;
    right:3.5%;
  }
`;
const Googlebtton = styled.div`
  position: absolute;
  box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
  width: 25%;
  cursor: pointer;
  color: #666666;
  z-index: 1;
  left: 1px;
  top: 16rem;
  display: flex;

  justify-content: center;
  align-items: center;
  padding: 0.7rem 1rem 0.7rem 1rem;
  border-radius: 50rem;
  transition: 210ms;
  &:hover {
    background-color: ;
    box-shadow: 1px 8px 15px rgba(0, 0, 0, 0.1);
  }

  & > img {
    width: 10%;
    height: 10%;
  }
  @media (max-width: 1107px) {
    width: 25%;
  }
  @media (max-width: 900px) {
    width: 74%;
    top: 116%;
    left: 13.5%;
    font-size: 1.15rem;
  }
  @media (max-width: 350px) {
    width: 90%;
    left: 5%;
  }
`;
const Container = styled.div`
  width: 100%;
  height: auto;

  padding: 0.5rem 3rem 0px 3rem;
  @media (max-width: 600px) {
    padding: 0.5rem 0rem 0px 0rem;
  }
`;
const Nav = styled.div`
  width: 100%;
  height: auto;

  display: flex;
  flex-wrap: no-wrap;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 600px) {
    padding: 0px 1rem 0px 1rem;
  }
`;
const Logo1 = styled.div`
  width: 11%;
  height: auto;
  margin: 0.4rem 0px 0.4rem 0px;
  & a > img {
    height: 95%;
    width: 100%;
  }
  @media (max-width: 1000px) {
    width: 28%;
  }
`;
const Navbutton = styled.div`
  width: 22%;
  display: flex;
  flex-wrap: no-wrap;
  font-weight: 600;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 1000px) {
    width: 54%;
  }
  @media (max-width: 400px) {
    width: 70%;
  }
`;
const Join = styled.div`
  color: #666666;

  font-size: 1rem;
  padding: 0.4rem 1rem 0.4rem 1rem;
  border-radius: 0.5rem;
  transition: 250ms;
  text-align: center;
  &:hover {
    background-color: rgba(0, 0, 0, 0.05);
    color: black;
  }
  @media (max-width: 1000px) {
    font-size: 1rem;
  }
`;
const Signup = styled.div`
  color: #0a66c2;
  width: auto;
  text-align: center;
  padding: 0.4rem 1rem 0.4rem 1rem;
  border: 1px solid #0a66c2;
  border-radius: 50rem;
  transition: 250ms;
  &:hover {
    background-color: #d7e8f8;
    color: #2f4d69;
  }
  @media (max-width: 1000px) {
    font-size: 1rem;
  }
`;

const mapStateToProps = (state) => {
  return {
    user: state.userState.user,
  };
};

const mapDispatchToProps = (dispatch) => ({
  signIn: () => dispatch(signInAPI()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
