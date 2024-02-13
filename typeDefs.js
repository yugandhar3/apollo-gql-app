const { gql } = require("apollo-server-express");

const typeDefs = gql`
type post {
    id:ID,
    title:String,
    descriptions:String
}

type Query {
    hello:String,

    getAllPosts:[post],
    getPostById(id:ID):post
}

input postInput {
    title:String,
    descriptions:String
}
type Mutation {
    createPosts(post:postInput):post,
    deletePost(id:ID):post,
    updatePost(id:ID,post:postInput):post

}
`
module.exports = typeDefs