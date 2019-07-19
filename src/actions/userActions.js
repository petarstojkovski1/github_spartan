import {
  SEARCH_USER,
  SEARCH_USER_ERROR,
  GET_USER_REPOS,
  GET_USER_REPOS_ERROR
} from './types';
import axios from 'axios';

export const searchUser = user => async dispatch => {
  try {
    const res = await axios.get(`https://api.github.com/users/${user}`);
    dispatch({
      type: SEARCH_USER,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: SEARCH_USER_ERROR,
      payload: err.response
    });
  }
};

export const getUserRepos = user => async dispatch => {
  try {
    const res = await axios.get(`https://api.github.com/users/${user}/repos`);
    dispatch({
      type: GET_USER_REPOS,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: GET_USER_REPOS_ERROR,
      payload: err.response
    });
  }
};
