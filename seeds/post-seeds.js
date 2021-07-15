const { Post } = require('../models');

const postData = [
    {
        title: "Tech Blog is now up and running!",
        post_content: "Tech Blog is an app that will allow you to organize your to-do list items by clicking and dragging them into 'To Do', 'In Progress', and 'Completed' categories.",
        user_id: 3
    },
    
]

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;
