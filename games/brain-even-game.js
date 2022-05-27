import {
  getRandomInt,
  getMaxRounds,
  playGame,
} from '../src/index.js';

// How to play
const gameDescription = 'Answer "yes" if the number is even, otherwise answer "no".';

// Game logic
const getQuestionAndAnswer = () => {
  const maxNumber = 100;
  const question = getRandomInt(maxNumber);
  const answer = question % 2 === 0 ? 'yes' : 'no';

  return [question, answer];
};

// Start game
const brainEvenGame = () => {
  const questions = [];
  const answers = [];
  const maxRounds = getMaxRounds();
  for (let roundCounter = 1; roundCounter <= maxRounds; roundCounter += 1) {
    const [question, answer] = getQuestionAndAnswer();
    questions[roundCounter] = question;
    answers[roundCounter] = answer;
  }
  playGame(gameDescription, questions, answers);
};

export default brainEvenGame;
