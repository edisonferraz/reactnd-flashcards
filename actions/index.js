export const FETCH_DECKS_SUCCESS = "FETCH_DECKS_SUCCESS";

const fetchDecksSuccess = decks => ({
  type: FETCH_DECKS_SUCCESS,
  decks
});
