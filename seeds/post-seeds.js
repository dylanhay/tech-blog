const { Post } = require('../models');

const postData = [
    {
        title: "Post number 1",
        content: "Body of Post Number 1",
        user_id: 1
    },
    {
        title: "Post number 2",
        content: "Body of Post Number 2",
        user_id: 2
    },
    {
        title: "Post number 3",
        content: "Body of Post Number 3",
        user_id: 3
    },
    {
        title: "Post number 4",
        content: "Body of Post Number 4",
        user_id: 4
    },
    {
        title: "Post number 5",
        content: "Body of Post Number 5",
        user_id: 5
    },
    {
        title: "Post number 6",
        content: "Body of Post Number 6",
        user_id: 6
    }
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;