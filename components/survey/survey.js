import mongoose from 'mongoose';

const { Schema } = mongoose;

const SurveySchema = new Schema({
  dateOfBirth: {
    type: Date,
    required: [true, 'date of birth is required'],
  },
  gender: {
    type: String,
    required: [true, 'gender is required'],
  },
  maritalStatus: {
    type: String,
    required: [true, 'marital status is required'],
  },
  educationLevel: {
    type: String,
    required: [true, 'education level is required'],
  },
  email: {
    type: String,
    required: [true, 'email is required'],
  },
  occupation: {
    type: String,
    required: [true, 'occupation is required'],
  },
  answers: [{ type: Number }],
  prediction: { type: String },
});

export default mongoose.model('Survey', SurveySchema);
