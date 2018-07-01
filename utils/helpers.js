export const formatDeckWithCards = (data, title, card) => {
  data[title].questions = [
    ...data[title].questions,
    { question: card.question, answer: card.answer }
  ];

  return data;
};

export const calculatePercentage = (total, totalCorrect) =>
  ((totalCorrect / total) * 100).toFixed(0);
