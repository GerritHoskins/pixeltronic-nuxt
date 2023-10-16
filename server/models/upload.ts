import { defineMongooseModel } from '#nuxt/mongoose';

export const Upload = defineMongooseModel('upload', {
  fileName: {
    type: String,
    required: true,
  },
  file: {
    data: Buffer,
    contentType: String,
  },
  uploadTime: {
    type: Date,
    default: Date.now,
  },
});
