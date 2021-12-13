import dictionary from "../../Dictionary/dictionary";
import { EASY, HARD, MEDIUM } from "../constants/constants";

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
