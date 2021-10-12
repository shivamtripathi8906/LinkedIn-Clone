import { connect } from "react-redux";
import styled from "styled-components";
import UM from "../images/user.svg";
import Postmodel from "./Postmodel";
import { useState, useEffect } from "react";
import { getarticleAPI } from "../actions";
import "../login/login.css";

const Midhome = (props) => {
  const [showModel, setuseModel] = useState("close");

  useEffect(() => {
    props.getArticles();
  }, []);

  const handleClick = (e) => {
    e.preventDefault();
    if (e.target !== e.currentTarget) {
      return;
    }
    switch (showModel) {
      case "open":
        setuseModel("close");
        break;
      case "close":
        setuseModel("open");
        break;
      default:
        setuseModel("close");
        break;
    }
  };

  return (
    <>
      <Component>
        <Addpost>
          <Miduser>
            {props.user && props.user.photoURL ? (
              <img src={props.user.photoURL} alt="user" />
            ) : (
              <img src={UM} alt="user" />
            )}
          </Miduser>
          <input
            type="text"
            placeholder="Start a post"
            onClick={handleClick}
            disabled={props.loading ? true : false}
          />
        </Addpost>
        <div>
          <Postmodel showModel={showModel} handleClick={handleClick} />
        </div>
        <Content>{props.loading && <p>Uploading...</p>}</Content>

        {props.user &&
          props.articles.length > 0 &&
          props.articles.map((article, key) => (
            <Userdetail key={key}>
              <Community>
                <Userdata>
                  <img src={article.actor.image} alt="usemin" />
                </Userdata>
                <UserFD>
                  <h5>{article.actor.title}</h5>
                  <p>{article.actor.email}</p>

                  <p className="date_mid">
                    {article.actor.date.toDate().toLocaleDateString()}
                  </p>
                </UserFD>
              </Community>
              <DescriptionUser>
                <p>{article.description}</p>
              </DescriptionUser>

              {article.sharedImg ? (
                <PostImage>
                  <img src={article.sharedImg} alt="b" />
                </PostImage>
              ) : null}

              <Likes>
                <h5>0 likes | 0 comments</h5>
              </Likes>
              <LikeCom>
                <button>Like</button>
                <button>Comment</button>
                <button>Share</button>
                <button>Send</button>
              </LikeCom>
            </Userdetail>
          ))}
      </Component>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.userState.user,
    loading: state.articleState.loading,
    articles: state.articleState.articles,
  };
};

const mapDispatchToProps = (dispatch) => ({
  getArticles: () => dispatch(getarticleAPI()),
});

const Addpost = styled.div`
  width: 100%;
  border: 1px solid rgb(216, 216, 216);
  background-color: white;
  border-radius: 5px;
  margin-bottom: 2vh;
  display: flex;
  justify-content: space-around;
  align-items: center;

  & > input {
    transition: 200ms;
    cursor: pointer;
    border: none;
    border-radius: 50rem;
    width: 87%;
    font-size: 0.85rem;
    padding: 0.9rem 1rem 0.9rem 1rem;
    font-weight: 600;
    outline: 1px solid rgb(148, 147, 147);
    &:hover {
      background-color: rgb(226, 226, 226);
    }
    @media (max-width: 333px) {
      margin-top: 0.3rem;
      margin-bottom: 0.3rem;
    }
  }
`;

const Miduser = styled.div`
  width: 7.5%;

  margin: 0.6rem 0rem 0.39rem 0rem;
  & > img {
    width: 100%;
    border-radius: 50%;
    height: auto;
  }
  @media (max-width: 600px) {
    width: 10%;
  }
`;

const Component = styled.div`
  width: 100%;
  height: fit-content;
  border-radius: 5px;
  margin-bottom: 2vh;
  background-color: #f5f5f5;
`;
const Content = styled.div`
  text-align: center;
  & > p {
    font-size: 2rem;
  }
`;

const Userdetail = styled.div`
  width: 100%;
  border: 1px solid rgb(216, 216, 216);
  background-color: white;
  border-radius: 5px;
  margin-bottom: 2vh;
  display: flex;
  flex-direction: column;
`;
const Community = styled.div`
  width: 97%;
  height: auto;

  display: flex;
  margin: 0.5rem 1%;
`;
const DescriptionUser = styled.div`
  width: 100%;
  overflow-wrap: break-word;
  padding: 0rem 1.3% 0.5rem 1.3%;
  & > p {
    font-size: 1rem;
  }
`;

const Userdata = styled.div`
  width: 8%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0.6rem 0rem 0.39rem 0rem;
  & > img {
    width: 100%;
    border-radius: 50%;
    height: auto;
  }
  @media (max-width: 550px) {
    width: 10%;
  }
`;

const UserFD = styled.div`
  width: 80%;

  margin-left: 1%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const PostImage = styled.div`
  width: 100%;
  height: auto;
  min-height: 0rem;
  & > img {
    width: 100%;
    height: 100%;
  }
`;

const LikeCom = styled.div`
  width: 100%;
  height: auto;

  display: flex;
  padding: 0.6rem 1%;
  justify-content: space-between;
  border-top: 1px solid grey;

  & > button {
    width: 24%;
    background-color: white;
    font-size: 0.94rem;
    color: rgb(110, 110, 110);
    font-weight: 600;
    padding-top: 0.7rem;
    padding-bottom: 0.7rem;
    cursor: pointer;
    border: none;
    border-radius: 6px;
    &:hover {
      background-color: rgb(219, 217, 217);
    }
  }
`;

const Likes = styled.div`
  width: 100%;
  padding: 0.2rem 1%;
`;

export default connect(mapStateToProps, mapDispatchToProps)(Midhome);
