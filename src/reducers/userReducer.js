import {
  SEARCH_USER,
  SEARCH_USER_ERROR,
  GET_USER_REPOS,
  GET_USER_REPOS_ERROR
} from '../actions/types';

const initialState = {
  user: {},
  repos: [],
  userErrors: null,
  repoErrors: null
};

export default function(state = initialState, action) {
  switch (action.type) {
    case SEARCH_USER:
      return {
        ...state,
        user: action.payload,
        userErrors: null
      };
    case SEARCH_USER_ERROR:
      return {
        ...state,
        userErrors: action.payload,
        user: {}
      };

    case GET_USER_REPOS:
      return {
        ...state,
        repos: action.payload,
        repoErrors: null
      };
    case GET_USER_REPOS_ERROR:
      return {
        ...state,
        repoErrors: action.payload
      };
    default:
      return state;
  }
}
