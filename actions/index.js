import * as API from "../utils/api";
export const FETCH_DECKS_SUCCESS = "FETCH_DECKS_SUCCESS";
export const CREATE_DECK_SUCCESS = "CREATE_DECK_SUCCESS";

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
