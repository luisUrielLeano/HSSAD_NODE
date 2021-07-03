import express from 'express';
import asyncWrapper from '../utils/asyncWrapper.js';
import userController from '../components/users/userController.js';
import authController from '../components/auth/authController.js';
import quizController from '../components/quiz/quizController.js';
import surveyController from '../components/survey/surveyController.js';
import isAuth from './middleware/isAuth.js';

const api = express.Router();

//= ============== Authentication endpoints ==================
api.route('/auth')
  .post(asyncWrapper(authController.signIn));
//= ============== User management endpoints ==================
api.route('/user')
  .get(isAuth, asyncWrapper(userController.getAllUsers))
  .post(isAuth, asyncWrapper(userController.createUser));
//= ============== Quiz endpoints =============================
api.route('/quiz')
  .get(asyncWrapper(quizController.getAllQuestions));
//= ============== Survey endpoints =============================
api.route('/survey')
  .post(asyncWrapper(surveyController.createSurvey))
  .get(isAuth, asyncWrapper(surveyController.getAllSurveys));

export default api;
