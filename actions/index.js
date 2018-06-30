import * as API from "../utils/api";
export const FETCH_DECKS_SUCCESS = "FETCH_DECKS_SUCCESS";
export const FETCH_DECK_SUCCESS = "FETCH_DECK_SUCCESS";
export const CREATE_DECK_SUCCESS = "CREATE_DECK_SUCCESS";
export const ADD_CARD_TO_DECK_SUCCESS = "ADD_CARD_TO_DECK_SUCCESS";

export const featchDecksSuccess = decks => ({
  type: FETCH_DECKS_SUCCESS,
  decks
});

export const getDecks = () => dispatch =>
  API.getDecks().then(decks => dispatch(featchDecksSuccess(decks)));

export const createDeckSuccess = deck => ({
  type: CREATE_DECK_SUCCESS,
  deck
});

export const createDeck = data => dispatch =>
  API.createDeck(data).then(() => dispatch(createDeckSuccess(data)));

export const addCardToDeckSuccess = (title, card) => ({
  type: ADD_CARD_TO_DECK_SUCCESS,
  title,
  card
});

export const addCardToDeck = (title, card) => dispatch => {
  return API.addCardToDeck(title, card).then(() =>
    dispatch(addCardToDeckSuccess(title, card))
  );
};
