import Question from './question.js';

export default class QuizService {
  static async getQuestions() {
    try {
      const questions = await Question.find();
      return questions;
    } catch (err) {
      return err;
    }
  }
}
