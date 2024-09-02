export const getRandomCountries = (item, countries=[]) => {
  const randomList = [];

  while (randomList.length < 3) {
    const random = Math.floor(Math.random() * countries.length);

    if (randomList.includes(countries[random]) || countries[random] == item.correctAnswer) {
      continue;
    }

    randomList.push(countries[random]);
  }

  randomList.push(item.correctAnswer);
  randomList.sort(() => Math.random() - 0.5);

  return randomList;
}

export const parseQuiz = (data = {}) => {
  let index = 0;
  const result = data.questions.map(item => {

    index++;
    return {
      question: item.question,
      flag: item.flag,
      name: `countries-${index}`,
      alt: "Флаг",
      list: getRandomCountries(item, data.countries)
    };
  });

  return result.sort(() => Math.random() - 0.5);
};
