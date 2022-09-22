const { Post } = require('../models');

const postData = [
    {
        title: "Title Example 1",
        post_content: "Post content example 1",
        user_id: 1,
    },
    {
        title: "Title Example 2",
        post_content: "Post content example 2",
        user_id: 2,
    },
    {
        title: "Title Example 3",
        post_content: "Post content example 3",
        user_id: 3,
    },
    {
        title: "Title Example 4",
        post_content: "Post content example 4",
        user_id: 4,
    },
    {
        title: "Title Example 5",
        post_content: "Post content example 5",
        user_id: 5,
    },
]

const seedPosts = () => Post.bulkCreate(postData);
module.exports = seedPosts;