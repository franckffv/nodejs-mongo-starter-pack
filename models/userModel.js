import mongoose from 'mongoose';
import validator from 'validator';

export const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Please add a name'],
    },
    email: {
      type: String,
      required: [true, 'Please add an email'],
      unique: true,
      lowercase: true,
      validator: [validator.isEmail, 'Please provide a valide email']
    },
    password: {
      type: String,
      required: [true, 'Please provide a password'],
      minlenght: 8
    },
    // passwordConfirm: {
    //   type: String,
    //   required: [true, 'Please confirm your password'],
    // }
  },
  {
    timestamps: true,
  }
);

export default mongoose.model('User', userSchema);
