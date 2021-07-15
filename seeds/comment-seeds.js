const { Comment } = require('../models');

const commentData = [

    {
        user_id: 3,
        post_id: 5,
        comment_text: "Fantastic!"
    },
    
]

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;
