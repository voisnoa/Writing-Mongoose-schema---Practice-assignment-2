const mongoose = require('mongoose');

const blogUserSchema = new mongoose.Schema({
    title: {
        type: String,
        unique: true,
        minlength: 5,
        description: "Serves as the title of the blog post"
    },
    content: {
        type: String,
        minlength:50,
        required: true,
        description: "The main content of the blog post"
    },
    Author: {
        type: String,
        description: "Username of the author"
    },
    Tags: {
        type: [String],
        description: "Optional field for storing tags or keywords related to the post, e.g., ['tech', 'coding']."
    },
    Category:{
        type: String,
        default: 'General',
        description: "Indicates the posts category"
    },
    likes:{
        type: [String],
        description:"Stores usernames of users who liked the post."
    },
    CreatedAt:{
        type: Date,
        default: Date.now,
        description: "Automatically records the post creation time."
    },
    UpdatedAt:{
        type: Date,
        description: "Automatically updated on modifications."  
    }
});

const  commentSchema = new mongoose.Schema({
    Username:{
        type: String,
        description: "Username of the commenter"
    },
    Message:{
        type: String,
        required: true,
        description: "the comment text"
    },
    commented: {
        type: Date,
        default: Date.now,
        description: "Automatically records the comment creation time."
    }
});

const BlogPost = mongoose.model('BlogPost', BlogPostSchema);


module.exports = BlogPost;
