import axios from "axios";
import {
  CREATE_RECORD,
  GET_RECORD,
  GET_RECORDS,
  UPDATE_RECORD,
  DELETE_RECORD,
  TOGGLE_RECORDS_LOADING,
  TOGGLE_RECORD_LOADING,
  RESET_RECORD,
} from "./types";

import { setErrors, clearErrors } from "./errorActions";

export const createPost = (postData, history) => (dispatch) => {
  dispatch(togglePostLoading());
  axios
    .post("/api/posts/create", postData)
    .then((res) => {
      dispatch({
        type: CREATE_RECORD,
        payload: res.data,
      });
      dispatch(togglePostLoading());
      history.push("/dashboard");
    })
    .catch((err) => {
      dispatch(setErrors(err.response.data));
      dispatch(togglePostLoading());
    });
};

export const getPostByID = (id) => (dispatch) => {
  dispatch(togglePostLoading());
  axios
    .get(`/api/posts/post/${id}`)
    .then((res) => {
      dispatch({
        type: GET_RECORD,
        payload: res.data,
      });
      dispatch(clearErrors());
      dispatch(togglePostLoading());
    })

    .catch((err) => {
      dispatch(setErrors(err.response.data));
      dispatch(togglePostLoading());
    });
};

export const getPostsByAuthor = (author) => (dispatch) => {
  dispatch(togglePostsLoading());
  axios
    .get(`/api/posts/author/${author}`)
    .then((res) => {
      dispatch({
        type: GET_RECORDS,
        payload: res.data,
      });
      dispatch(togglePostsLoading());
    })
    .catch((err) => {
      dispatch(setErrors(err.response.data));
      dispatch(togglePostsLoading());
    });
};

export const getPosts = () => (dispatch) => {
  dispatch(togglePostsLoading());
  axios
    .get(`/api/posts/`)
    .then((res) => {
      dispatch({
        type: GET_RECORDS,
        payload: res.data,
      });
      dispatch(clearErrors());
      dispatch(togglePostsLoading());
    })
    .catch((err) => {
      dispatch(setErrors(err.response.data));
      dispatch(togglePostsLoading());
    });
};

export const updatePost = (id, postData, history) => (dispatch) => {
  dispatch(togglePostLoading());
  axios
    .patch(`/api/posts/update/${id}`, postData)
    .then((res) => {
      dispatch({
        type: UPDATE_RECORD,
        payload: res.data,
      });
      dispatch(togglePostLoading());
      history.push(`/blog/post/${res.data._id}`);
    })
    .catch((err) => {
      dispatch(setErrors(err.response.data));
      dispatch(togglePostLoading());
    });
};

export const deletePost = (id, history) => (dispatch) => {
  dispatch(togglePostLoading());
  axios
    .delete(`/api/posts/delete/${id}`)
    .then((res) => {
      dispatch({
        type: DELETE_RECORD,
        payload: id,
      });
      dispatch(togglePostLoading());
      history.push("/blog");
    })
    .catch((err) => {
      dispatch(setErrors(err.response.data));
      dispatch(togglePostLoading());
    });
};

export const resetPost = () => {
  return {
    type: RESET_RECORD,
  };
};

export const togglePostLoading = () => {
  return {
    type: TOGGLE_RECORD_LOADING,
  };
};

export const togglePostsLoading = () => {
  return {
    type: TOGGLE_RECORDS_LOADING,
  };
};
