//После игры необходимо спросить номер вопроса.
//По номеру вопроса нужно вывести текст вопроса и текст выбранного ответа

const playerAnswers = [];

const isCorrectAnswer = ({ playerAnswer, max }) => {
  if (isNaN(playerAnswer) || !isFinite(playerAnswer)) {
    alert("Вы ввели недопустимый символ");
    return false;
  } else if (playerAnswer < 1 || playerAnswer > max) {
    alert("Ваше число выходит из допустимого диапозона");
    return false;
  }
  return true;
};

const getAnswer = (idx) => {
  const { question, answers, id: questionId } = gameData[idx];

  const answersBundle = answers.reduce(
    (acc, { title }) => acc + "\n" + title,
    ""
  );

  while (true) {
    const playerAnswer = +prompt(`${question} ${answersBundle}`);

    if (playerAnswer === -1) return playerAnswer;

    if (isCorrectAnswer({ playerAnswer, max: answers.length })) {
      playerAnswers.push({
        stepIdx: idx,
        questionIdx: questionId,
        answerIdx: playerAnswer - 1,
      });

      return answers[playerAnswer - 1].nextTo;
    }
  }
};

let nextStep = 0;
while (nextStep !== -1) {
  nextStep = getAnswer(nextStep);
}

let selectedAnswer;

//Проверка на длину playerAnswers на случай, если игрок на первом же вопросе ввёл -1 и ответов нет.
while (selectedAnswer !== -1 && playerAnswers.length !== 0) {
  let selectedTitles = "Игра окончена! Спасибо за игру!";

  if (selectedAnswer) {
    const { questionIdx, answerIdx } = playerAnswers[selectedAnswer - 1];
    const questionTitle = gameData[questionIdx].question;
    const answerTitle = gameData[questionIdx].answers[answerIdx].title;

    selectedTitles = `Вопрос:\n\t${questionTitle}\nВаш ответ:\n\t${answerTitle}\n\n`;
  }

  const preAnswer = +prompt(`${selectedTitles}Введите номер шага, ваш ответ на который хотели бы посмотреть 
  (Всего шагов: ${playerAnswers.length}. Для выхода введите -1)`);

  if (
    preAnswer === -1 ||
    isCorrectAnswer({
      playerAnswer: preAnswer,
      max: playerAnswers.length,
    })
  ) {
    selectedAnswer = preAnswer;
  }
}

alert("Всего доброго!");
