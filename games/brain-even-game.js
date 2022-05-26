import {
  getRandomInt,
  welcome,
  getUserName,
  greatingsUser,
  printGameDescription,
  printAskedQuestion,
  getUsersAnswer,
  getResult,
  printResult,
  congratulationsUser,
} from '../src/index.js';

// How to play
const gameDescription = 'Answer "yes" if the number is even, otherwise answer "no".';

const whatToAsk = () => {
  const maxNumber = 100;
  const numberToAsk = getRandomInt(maxNumber);
  printAskedQuestion(numberToAsk);

  return numberToAsk;
};

// Check right answer
const isRightAnswer = (userName) => {
  // Ask question
  const askedQuestion = whatToAsk();
  // Get entered answer
  const usersAnswer = getUsersAnswer();
  // Get right Answer
  const rightAnswer = askedQuestion % 2 === 0 ? 'yes' : 'no';
  // Check answer
  const result = getResult(usersAnswer, rightAnswer);
  printResult(result, usersAnswer, rightAnswer, userName);

  return result;
};

// Start game
const brainEvenGame = () => {
  welcome();
  const userName = getUserName();
  greatingsUser(userName);
  printGameDescription(gameDescription);

  // Play rounds
  let rightAnswers = 0;
  const maxRounds = 3;
  do {
    const result = isRightAnswer(userName);
    if (result) {
      rightAnswers += 1;
    } else {
      break;
    }
  } while (rightAnswers < maxRounds);

  if (rightAnswers === maxRounds) {
    congratulationsUser(userName);
  }
};

export default brainEvenGame;