import {
  EASY,
  HARD,
  MEDIUM,
  SET_LETTER,
  SET_WORD,
} from "../constants/constants";
import dictionary from "../../Dictionary/dictionary";

let actualLevel = dictionary.easy;

const initialState = {
  actualLevel,
  word: actualLevel[Math.floor(Math.random() * actualLevel.length)],
  errors: 0,
  isGameOver: false,
  isGameWon: false,
  errorLetters: [],
  correctLetters: [],
  correctLettersWord: [],
};

export default function reducer(state = initialState, { type, payload }) {
  switch (type) {
    case EASY:
      return {
        ...state,
        actualLevel: payload,
        word: payload[Math.floor(Math.random() * payload.length)],
        correctLettersWord: [...state.word].map((letter) => "_"),
      };

    case MEDIUM:
      return {
        ...state,
        actualLevel: payload,
        word: payload[Math.floor(Math.random() * payload.length)],
        correctLettersWord: [...state.word].map((letter) => "_"),
      };

    case HARD:
      return {
        ...state,
        actualLevel: payload,
        word: payload[Math.floor(Math.random() * payload.length)],
        correctLettersWord: [...state.word].map((letter) => "_"),
      };

    case SET_WORD:
      let correct = state.word === payload;

      return {
        ...state,
        errors: correct ? 0 : state.errors + 1,
        isGameOver: state.errors === 6,
        isGameWon: correct,
      };

    case SET_LETTER:
      let correctLettersWordAux = [...state.correctLettersWord];
      let correctCount = 0;

      state.word.split("").forEach((letter, index) => {
        if (letter === payload) {
          correctLettersWordAux[index] = letter;
          correctCount++;
        }
      });

      return {
        ...state,
        errors: correctCount === 0 ? state.errors + 1 : state.errors,
        errorLetters: correctCount === 0 ? [...state.errorLetters, payload] : state.errorLetters,
        correctLetters: correctCount !== 0 ? [...state.correctLetters, payload] : state.correctLetters,
        correctLettersWord: correctLettersWordAux,
        isGameOver: state.errors === 6,
        isGameWon: correctCount === state.word.length,
      };

    default:
      return state;
  }
}
