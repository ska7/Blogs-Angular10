const { Router } = require("express");
const Post = require("../models/postModel.js");
const { performance } = require("perf_hooks");

const router = Router();

function uniqueID() {
  return new Date().getTime().toString().concat(performance.now());
}

router.post("/", async (req, res) => {
  const postId = uniqueID();
  const newPost = new Post({
    title: "Test Post",
    description: "The Very Test",
    imageSrc:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXlcFyAzoOpBjbp34edTIfBL4FReYrdFyr2g&usqp=CAU",
    id: postId,
  });

  try {
    await newPost.save();
    res.status(200).json({ post: newPost });
  } catch (e) {
    res.status(500).json({ error: e });
  }
});

module.exports = router;
