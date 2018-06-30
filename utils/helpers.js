export const formatDeckWithCards = (data, title, card) => {
  data[title].questions = [
    ...data[title].questions,
    { question: card.question, answer: card.answer }
  ];

  return data;
};
