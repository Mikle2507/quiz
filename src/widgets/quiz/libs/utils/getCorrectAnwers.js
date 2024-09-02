const getCorrectAnwers = (list = []) => {
  if (!list.questions.length) {
    return [];
  }

  return list.questions.map((item, index) => {

    return {
      code: `countries-${index+1}`,
      name: item.correctAnswer
    }
  });
};

export default getCorrectAnwers;