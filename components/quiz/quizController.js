import QuizService from './quizService.js';

const quizController = {};

quizController.getAllQuestions = async (req, res) => {
  try {
    const questions = await QuizService.getQuestions();
    return res.json(questions);
  } catch (err) {
    return res.status(500).send({ message: err.message });
  }
};

export default quizController;
