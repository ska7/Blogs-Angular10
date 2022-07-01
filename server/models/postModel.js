const mongoose = require("mongoose");

const postSchema = mongoose.Schema({
  title: String,
  description: String,
  imageSrc: String,
  id: String,
});

const Post = mongoose.model("Post", postSchema);

module.exports = Post;
