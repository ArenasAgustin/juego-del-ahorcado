import { EASY, HARD, MEDIUM } from "../constants/constants";
import dictionary from "../../Dictionary/dictionary";

const initialState = {
  actualLevel: dictionary.easy,
};

export default function reducer(state = initialState, { type, payload }) {
  switch (type) {
    case EASY:
      return {
        ...state,
        actualLevel: payload,
      };
    case MEDIUM:
      return {
        ...state,
        actualLevel: payload,
      };
    case HARD:
      return {
        ...state,
        actualLevel: payload,
      };
    default:
      return state;
  }
}
