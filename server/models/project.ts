import { defineMongooseModel } from '#nuxt/mongoose';

export const Project = defineMongooseModel('project', {
  name: {
    type: String,
    unique: true,
    required: true,
  },
  desc: {
    type: String,
  },
  file: {
    type: String,
  },
});
