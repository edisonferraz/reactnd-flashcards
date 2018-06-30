import { AsyncStorage } from "react-native";
import { formatDeckWithCards } from "../utils/helpers";

const FLASH_CARDS_STORAGE_KEY = "FlashCards:CardStore";

export const getDecks = () => {
  return AsyncStorage.getItem(FLASH_CARDS_STORAGE_KEY).then(decks =>
    JSON.parse(decks)
  );
};

export const createDeck = deck => {
  return AsyncStorage.mergeItem(FLASH_CARDS_STORAGE_KEY, JSON.stringify(deck));
};

export const addCardToDeck = (title, card) => {
  return AsyncStorage.getItem(FLASH_CARDS_STORAGE_KEY).then(decks => {
    const data = JSON.parse(decks);

    AsyncStorage.setItem(
      FLASH_CARDS_STORAGE_KEY,
      JSON.stringify(formatDeckWithCards(data, title, card))
    );
  });
};
