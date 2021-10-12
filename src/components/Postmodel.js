import styled from "styled-components";
import "../login/login.css";
import userP from "../images/user.svg";
import { useState } from "react";
import { connect } from "react-redux";
import { postArticleAPI } from "../actions";
import firebase from "@firebase/app-compat";

const Postmodel = (props) => {
  const [editorText, setText] = useState("");
  const [shareImage, setShareImage] = useState("");

  const handleChange = (e) => {
    const image = e.target.files[0];
    if (image === "" || image === undefined) {
      alert("Select a valid image file.");
      return;
    }
    setShareImage(image);
  };
  const postArticle = (e) => {
    e.preventDefault();
    if (e.target !== e.currentTarget) {
      return;
    }
    const payload = {
      image: shareImage,
      user: props.user,
      description: editorText,
      timestamp: firebase.firestore.Timestamp.now(),
    };
    props.postArticle(payload);
    reset(e);
  };

  const reset = (e) => {
    setText("");
    setShareImage("");
    props.handleClick(e);
  };

  return (
    <>
      {props.showModel === "open" && (
        <Container>
          <Content>
            <Headeer>
              <h2>Create a post</h2>
              <button onClick={(event) => reset(event)}>&#10060;</button>
            </Headeer>
            <SharedContent>
              <Userinfo>
                {props.user && props.user.photoURL ? (
                  <img src={props.user.photoURL} alt="uswer" />
                ) : (
                  <img src={userP} alt="uswer" />
                )}
                {props.user && props.user.photoURL ? (
                  <span>{props.user.displayName}</span>
                ) : (
                  <span>Name</span>
                )}
              </Userinfo>
              <Editor>
                <textarea
                  value={editorText}
                  onChange={(e) => setText(e.target.value)}
                  placeholder="What do you want to talk about?"
                  autoFocus={true}
                ></textarea>
                <UploadImg>
                  <input
                    type="file"
                    accept="image/gif, image/jpeg ,image/png"
                    name="image"
                    id="file"
                    style={{ display: "none" }}
                    onChange={handleChange}
                  />
                  <p>
                    <label htmlFor="file">Click me to select an image</label>
                  </p>
                  {shareImage && (
                    <img src={URL.createObjectURL(shareImage)} alt="noim" />
                  )}
                </UploadImg>
              </Editor>
            </SharedContent>
            <Sharecreation></Sharecreation>
            <button onClick={(event) => postArticle(event)}>Post</button>
          </Content>
        </Container>
      )}
    </>
  );
};

const Container = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  z-index: 9999;
  color: black;
  background-color: rgba(0, 0, 0, 0.8);
  animation: fadeIn 0.3s;
`;

const Content = styled.div`
  width: 100%;
  max-height: 90%;
  background-color: white;
  max-width: 552px;
  overflow: initial;
  border-radius: 5px;
  position: relative;
  display: flex;
  flex-direction: column;
  top: 32px;
  margin: 0 auto;
`;

const Headeer = styled.div`
  display: block;
  padding: 16px 20px;
  border-bottom: 1px solid rgbd(0, 0, 0, 0.15);
  font-size: 13px;
  line-height: 1.5;
  font-weight: 400;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: rgba(0, 0, 0, 0.6);
  button {
    height: 40px;
    width: 40px;
    min-width: auto;
    border: none;
    background-color: white;
  }
`;
const SharedContent = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  overflow-y: auto;
  vertical-align: baseline;
  background: transparent;
  padding: 8px 12px;
`;
const Userinfo = styled.div`
  display: flex;
  align-items: center;
  padding: 12px 24px;
  svg,
  img {
    background-color: ;
    width: 48ox;
    height: 48px;
    background-clip: content-box;
    border: 2px solid transparent;
    border-radius: 50%;
  }
  span {
    font-size: 16px;
    font-weight: 600;
    line-height: 1.5;

    margin-left: 5px;
  }
`;

const Sharecreation = styled.div`
  display: flex;
  justify-content: space-between;
  pad: 12px 24px;
`;

const Editor = styled.div`
  padding: 12px 24px;
  textarea {
    border: none;
    outline: none;
    width: 100%;
    min-height: 100px;
    resize: none;
  }
  input {
    width: 100%;
    height: 35px;
    font-size: 16px;
    margin-bottom: 20px;
  }
`;

const UploadImg = styled.div`
  text-align: center;
  img {
    width: 100%;
    height: auto;
  }
`;

const mapStateToProps = (state) => {
  return {
    user: state.userState.user,
  };
};

const mapDispatchToProps = (dispatch) => ({
  postArticle: (payload) => {
    dispatch(postArticleAPI(payload));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Postmodel);
