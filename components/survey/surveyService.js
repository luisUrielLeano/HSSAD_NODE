import Survey from './survey.js';

export default class SurveyService {
  static async createSurvey(surveyInfo) {
    try {
      const survey = new Survey({
        dateOfBirth: surveyInfo.dateOfBirth,
        gender: surveyInfo.gender,
        educationLevel: surveyInfo.educationLevel,
        email: surveyInfo.email,
        occupation: surveyInfo.occupation,
        answers: surveyInfo.answers,
      });
      const surveyCreated = await survey.save();
      return surveyCreated;
    } catch (err) {
      return err;
    }
  }
}
