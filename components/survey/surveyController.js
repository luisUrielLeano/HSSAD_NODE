import SurveyService from './surveyService.js';

const surveyController = {};

surveyController.createSurvey = async (req, res) => {
  try {
    const surveyInfo = req.body;
    const surveyCreated = await SurveyService.createSurvey(surveyInfo);
    return res.json({ msg: 'Survey created', prediction: surveyCreated.prediction });
  } catch (err) {
    return res.status(err.status).json({ message: err.message });
  }
};

surveyController.getAllSurveys = async (req, res) => {
  try {
    const surveys = await SurveyService.getSurveys();
    return res.json(surveys);
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};

export default surveyController;
