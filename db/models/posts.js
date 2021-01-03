const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const postsSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      maxlength: 128
    },
    hashtags: {
      type: String,
      required: true
    },
    desc: {
      type: String,
      required: true
    },
    followers: {
      type: Number,
      required: true
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model('Posts', postsSchema);
