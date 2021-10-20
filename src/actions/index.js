import { auth, storage } from "../config/Config";
import {
  SET_USER,
  SET_LOADING_STATUS,
  GET_ARTICLES,
  SET_LIKE,
} from "./actionType";
import db from "../config/Config";
import firebase from "@firebase/app-compat";

export const setLike = (payload) => ({
  type: SET_LIKE,
  payload: payload,
});

export const setUser = (payload) => ({
  type: SET_USER,
  user: payload,
});

export const setLoading = (status) => ({
  type: SET_LOADING_STATUS,
  status: status,
});

export const getArticles = (payload) => ({
  type: GET_ARTICLES,
  payload: payload,
});

export function setLikesAPI(payload) {
  return (dispatch) => {
    // db.collection("articles").add({
    // console.log(payload.t);
    // db.collection("articles")
    //   .doc(payload.id)
    //   .update({
    //     // likesArray: payload.user.email
    //     likesArray: firebase.firestore.FieldValue.arrayUnion(
    //       payload.user.email
    //     ),
    //   });

    if (!payload.t.includes(payload.user.email)) {
      db.collection("articles")
        .doc(payload.id)
        .update({
          // likesArray: payload.user.email
          likesArray: firebase.firestore.FieldValue.arrayUnion(
            payload.user.email
          ),
        });
    } else {
      db.collection("articles")
        .doc(payload.id)
        .update({
          likesArray: firebase.firestore.FieldValue.arrayRemove(
            payload.user.email
          ),
        });
    }
  };
}

export function signInAPI() {
  return (dispatch) => {
    let provider = new firebase.auth.GoogleAuthProvider();
    provider.setCustomParameters({
      prompt: "select_account",
    });
    auth
      .signInWithPopup(provider)
      .then((payload) => {
        dispatch(setUser(payload.user));
      })
      .catch((error) => alert("Not chosen correctly"));
  };
}

export function getUserAuth() {
  return (dispatch) => {
    auth.onAuthStateChanged(async (user) => {
      if (user) {
        dispatch(setUser(user));
      }
    });
  };
}

export function signOutAPI() {
  return (dispatch) => {
    auth
      .signOut()
      .then(() => {
        dispatch(setUser(null));
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
}

export function postArticleAPI(payload) {
  return (dispatch) => {
    dispatch(setLoading(true));

    if (payload.image) {
      const upload = storage
        .ref(`images/${payload.image.name}`)
        .put(payload.image);
      upload.on(
        "state_changed",
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          if (snapshot.state === "RUNNING") {
            console.log(`progress=${progress}`);
          }
        },
        (error) => console.log(error.code),
        async () => {
          const downloadURL = await upload.snapshot.ref.getDownloadURL();

          db.collection("articles").add({
            actor: {
              description: payload.user.email,
              title: payload.user.displayName,
              date: payload.timestamp,
              image: payload.user.photoURL,
            },
            sharedImg: downloadURL,
            description: payload.description,
            comments: 0,
            likes: 0,
            likesArray: [],
          });
          dispatch(setLoading(false));
        }
      );
    } else {
      db.collection("articles").add({
        actor: {
          description: payload.user.email,
          title: payload.user.displayName,
          date: payload.timestamp,
          image: payload.user.photoURL,
        },
        sharedImg: "",
        description: payload.description,
        comments: 0,
        likes: 0,
        likesArray: [],
        id: payload.id,
      });
      dispatch(setLoading(false));
    }
  };
}

export function getarticleAPI() {
  return (dispatch) => {
    let payload = [];

    db.collection("articles")
      .orderBy("actor.date", "desc")
      .onSnapshot((snapshot) => {
        var payload = [];
        snapshot.docs.map((doc) => {
          var ob = {};
          ob.id = doc.id;
          ob.data = doc.data();
          payload.push(ob);
        });
        dispatch(getArticles(payload));
      });
  };
}
