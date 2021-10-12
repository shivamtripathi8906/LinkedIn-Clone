import styled from "styled-components";
import "../login/login.css";
import UL1 from "../images/user.svg";
import B1 from "../images/card-bg.svg";
import C1 from "../images/item-icon.svg";
import { connect } from "react-redux";
import Event1 from "../images/plus-icon.svg";
import { Link } from "react-router-dom";

const Lefthome = (props) => {
  return (
    <>
      <Component>
        <Userdetailleft>
          <BackImg>
            <img src={B1} alt="user_back" />
            <UserImgLeft>
              {props.user && props.user.photoURL ? (
                <img src={props.user.photoURL} alt="user" />
              ) : (
                <img src={UL1} alt="user_left" />
              )}
            </UserImgLeft>
          </BackImg>

          <Onlyname>
            {props.user ? (
              <h4>
                {props.user.displayName}
                <br />
                --
              </h4>
            ) : (
              <h4>
                Welcome, to Linkedin <br />
                --
              </h4>
            )}
          </Onlyname>
          <Connection>
            <div className="connect">
              <p> &#9743; &nbsp; Grow your network </p>
            </div>
            <div className="connect">
              <p>
                <img src={C1} alt="item" /> &nbsp; My items
              </p>
            </div>
          </Connection>
        </Userdetailleft>

        <Community>
          <Link to="/feed">
            Groups <img src={Event1} alt="" />
          </Link>
          <Link to="/feed">
            Events <img src={Event1} alt="" />{" "}
          </Link>
          <Link to="/feed">
            Followed Hashtags <img src={Event1} alt="" />
          </Link>
          <button>Discover more</button>
        </Community>
      </Component>
    </>
  );
};
const mapStateToProps = (state) => {
  return {
    user: state.userState.user,
  };
};

const mapDispatchToProps = (dispatch) => ({});

const Community = styled.div`
  display: flex;
  flex-direction: column;
  background-color: white;
  margin-top: 2vh;
  height: auto;
  border: 1px solid rgb(216, 216, 216);
  border-radius: 5px;

  & > a {
    padding-left: 3%;
    padding-right: 3%;
    text-decoration: none;
    color: #0a66c2;
    padding-top: 0.5rem;
    font-size: 0.9rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    transition: 400ms;

    & > img {
      display: none;
      transition: 10000ms;
    }
    &:hover {
      & > img {
        display: block;
      }
    }
  }
  & > button {
    margin-top: 0.7rem;
    width: 100%;
    outline: none;
    border: none;
    border-top: 1px solid rgb(216, 216, 216);
    cursor: pointer;
    padding-top: 1.1rem;
    padding-bottom: 1.1rem;
    background-color: white;
    color: rgb(150, 148, 148);
    border-radius: 5px;

    transition: 250ms;
    &:hover {
      background-color: rgb(216, 216, 216);
      color: white;
    }
  }
`;

const Connection = styled.div`
  width: 100%;
`;

const Onlyname = styled.div`
  width: 100%;
  height: auto;
  text-align: center;
  padding-top: 2rem;
  padding-bottom: 2rem;

  @media (max-width: 950px) {
    padding-top: 6rem;
    padding-bottom: 2rem;
  }
  @media (max-width: 550px) {
    padding-top: 2.5rem;
    padding-bottom: 2rem;
  }
`;

const UserImgLeft = styled.div`
  width: 22%;
  position: absolute;
  right: 40%;
  top: 50%;
  & > img {
    width: 100%;

    border: 2px solid white;
    height: 100%;
    border-radius: 100%;
  }
`;

const BackImg = styled.div`
  height: auto;
  width: 100%;
  position: relative;
  & > img {
    width: 100%;
    height: auto;
  }
`;

const Component = styled.div`
  width: 100%;
  height: fit-content;
  margin-bottom: 2vh;
  display: flex;
  flex-direction: column;
`;
const Userdetailleft = styled.div`
  background-color: white;
  height: auto;
  border: 1px solid rgb(216, 216, 216);
  border-radius: 5px;
`;

export default connect(mapStateToProps, mapDispatchToProps)(Lefthome);
