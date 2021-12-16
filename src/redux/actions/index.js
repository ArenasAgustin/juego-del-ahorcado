import dictionary from "../../Dictionary/dictionary";
import { EASY, HARD, MEDIUM, SET_LETTER, SET_WORD } from "../constants/constants";

// --------------------------------------------------------------------- level
export function getEasyLevel() {
  return function (dispatch) {
    return dispatch({
      type: EASY,
      payload: dictionary.easy,
    });
  };
}

export function getMediumLevel() {
  return function (dispatch) {
    return dispatch({
      type: MEDIUM,
      payload: dictionary.medium,
    });
  };
}

export function getHardLevel() {
  return function (dispatch) {
    return dispatch({
      type: HARD,
      payload: dictionary.hard,
    });
  };
}

// --------------------------------------------------------------------- setters
export function setLetter(letter) {
  return function (dispatch) {
    return dispatch({
      type: SET_LETTER,
      payload: letter,
    });
  };
}

export function setWord(word) {
  return function (dispatch) {
    return dispatch({
      type: SET_WORD,
      payload: word,
    });
  };
}