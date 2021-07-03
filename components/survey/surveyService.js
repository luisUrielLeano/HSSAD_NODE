import { PythonShell } from 'python-shell';

import Survey from './survey.js';
import { pythonUrl, pythonScript } from '../../config.js';

export default class SurveyService {
  static async createSurvey(surveyInfo) {
    try {
      const survey = new Survey({
        dateOfBirth: surveyInfo.dateOfBirth,
        gender: surveyInfo.gender,
        maritalStatus: surveyInfo.maritalStatus,
        educationLevel: surveyInfo.educationLevel,
        email: surveyInfo.email,
        occupation: surveyInfo.occupation,
        answers: surveyInfo.answers,
      });
      // Creating object options to be use with python shell
      const options = {
        pythonPath: pythonUrl,
        args: [
          survey.answers,
        ],
      };
      const result = await this.execPythonNN(options);
      // As we receive array of strings,
      // using destructuring to assign to prediction the array's first value
      const [prediction] = result;
      survey.prediction = prediction;
      const surveyCreated = await survey.save();

      return surveyCreated;
    } catch (err) {
      err.status = 500;
      throw err;
    }
  }

  static async getSurveys() {
    try {
      const surveys = await Survey.find();
      return surveys;
    } catch (err) {
      return err;
    }
  }

  static execPythonNN(options) {
    return new Promise((done, reject) => {
      PythonShell.run(pythonScript, options,
        (err, result) => (err ? reject(err) : done(result)));
    });
  }
}
