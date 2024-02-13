const mongoose = require("mongoose");

const postSchema = mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    descriptions: {
        type: String,
        required: true,
    }
})

const Post = mongoose.model('post', postSchema);
module.exports = Post