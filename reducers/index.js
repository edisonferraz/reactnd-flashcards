import { FETCH_DECKS_SUCCESS, CREATE_DECK_SUCCESS } from "../actions";

const initialState = {
  React: {
    title: "React",
    questions: [
      {
        question: "What is React?",
        answer: "A library for managing user interfaces"
      },
      {
        question: "Where do you make Ajax requests in React?",
        answer: "The componentDidMount lifecycle event"
      }
    ]
  },
  JavaScript: {
    title: "JavaScript",
    questions: [
      {
        question: "What is a closure?",
        answer:
          "The combination of a function and the lexical environment within which that function was declared."
      }
    ]
  }
};

export default function(state = {}, action) {
  switch (action.type) {
    case FETCH_DECKS_SUCCESS: {
      return { ...state, ...action.decks };
    }

    case CREATE_DECK_SUCCESS: {
      return { ...state, ...action.deck };
    }

    default:
      return state;
  }
}
