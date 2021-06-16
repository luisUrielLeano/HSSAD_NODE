import SurveyService from './surveyService.js';

const surveyController = {};

surveyController.createSurvey = async (req, res) => {
  try {
    const surveyInfo = req.body;
    const surveyCreated = await SurveyService.createSurvey(surveyInfo);
    return res.json({ msg: 'Survey created', survey: surveyCreated });
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};

export default surveyController;
