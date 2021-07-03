import mongoose from 'mongoose';

const { Schema } = mongoose;

const QuestionSchema = new Schema({
  qNumber: {
    type: Number,
  },
  description: {
    type: String,
  },
  positive: {
    type: Boolean,
  },
});

export default mongoose.model('Question', QuestionSchema);
