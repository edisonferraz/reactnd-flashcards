import { AsyncStorage } from "react-native";

const FLASH_CARDS_STORAGE_KEY = "FlashCards:CardStore";

export const getDecks = () => {
  return AsyncStorage.getItem(FLASH_CARDS_STORAGE_KEY).then(decks =>
    JSON.parse(decks)
  );
};

export const createDeck = deck => {
  return AsyncStorage.mergeItem(FLASH_CARDS_STORAGE_KEY, JSON.stringify(deck));
};
