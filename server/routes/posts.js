const express = require("express");
const {getPosts,createPosts,updatePost,likePost,deletePost} = require("../controller/posts.js")
const router = express.Router();

//callback function when someone visit at 4000/
router.get('/',getPosts)
router.post('/',createPosts)
router.patch('/:id', updatePost);
router.delete('/:id', deletePost);
router.patch('/:id/likePost', likePost);


module.exports = router;