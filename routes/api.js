import express from 'express';
import asyncWrapper from '../utils/asyncWrapper.js';
import userController from '../components/users/userController.js';
import authController from '../components/auth/authController.js';
import quizController from '../components/quiz/quizController.js';
import isAuth from './middleware/isAuth.js';

const api = express.Router();

//= ============== Authentication endpoints ==================
api.route('/auth')
  .post(asyncWrapper(authController.signIn));
//= ============== User management endpoints ==================
api.route('/user')
  .get(isAuth, asyncWrapper(userController.getAllUsers))
  .post(asyncWrapper(userController.createUser));
//= ============== Authentication endpoints ==================
api.route('/quiz')
  .get(asyncWrapper(quizController.getAllQuestions));

export default api;
