const express = require("express");
const router = express.Router();
const BlogPost = require("../models/blogPost");

//Routes
router.get("/", (req, res) => {
  BlogPost.find({})
    .then((data) => {
      // console.log("Data: ", data);
      res.json(data);
    })
    .catch((error) => {
      console.log("error: ", error);
    });
});

router.post("/save", (req, res) => {
  const data = req.body;
  const newBlogPost = new BlogPost(data);
  newBlogPost.save((error) => {
    if (error) {
      res.status(500).json({ msg: "Oops,there was an error!" });
    } else {
      res.json({
        msg: "your application has been saved",
      });
    }
  });
});

module.exports = router;
