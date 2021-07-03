import mongoose from 'mongoose';

const { Schema } = mongoose;

const UserSchema = new Schema({
  username: {
    type: String,
    required: [true, 'username is required'],
  },
  password: {
    type: String,
    required: [true, 'password is required'],
  },
  email: {
    type: String,
    uniqe: true,
    required: [true, 'email is required'],
  },
  role: {
    type: String,
  },
  isActive: {
    type: Boolean,
    default: false,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

// Method to delete  unwanted properties
UserSchema.methods.toJSON = function deleteProperties() {
  const obj = this.toObject();
  delete obj.password;
  return obj;
};

export default mongoose.model('User', UserSchema);
