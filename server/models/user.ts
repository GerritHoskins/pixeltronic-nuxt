import { defineMongooseModel } from '#nuxt/mongoose';

export const User = defineMongooseModel('user', {
  email: {
    type: String,
    unique: true,
    required: true,
  },
  password: {
    type: String,
    minlength: 6,
    required: true,
  },
  role: {
    type: String,
    default: 'user',
  },
});
