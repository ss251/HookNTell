import {
  RESET_RECORD,
  CREATE_RECORD,
  GET_RECORD,
  GET_RECORDS,
  UPDATE_RECORD,
  DELETE_RECORD,
  TOGGLE_RECORDS_LOADING,
  TOGGLE_RECORD_LOADING,
} from "../actions/types";

const initialState = {
  post: {},
  posts: [],
  postLoading: false,
  postsLoading: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case CREATE_RECORD:
      return {
        ...state,
        posts: [...state.posts, action.payload],
      };
    case GET_RECORDS:
      return {
        ...state,
        post: {},
        posts: [...action.payload],
      };
    case GET_RECORD:
      return {
        ...state,
        post: { ...action.payload[0] },
      };
    case UPDATE_RECORD:
      const posts = state.posts.filter(
        (post) => post._id !== action.payload._id
      );
      return {
        ...state,
        post: {},
        posts: [...posts, action.payload],
      };
    case DELETE_RECORD:
      return {
        ...state,
        posts: state.posts.filter((post) => post._id !== action.payload),
      };
    case TOGGLE_RECORD_LOADING:
      return {
        ...state,
        postLoading: !state.postLoading,
      };
    case TOGGLE_RECORDS_LOADING:
      return {
        ...state,
        postsLoading: !state.postsLoading,
      };
    case RESET_RECORD:
      return initialState;
    default:
      return state;
  }
}
