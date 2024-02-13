const express = require("express");
const { ApolloServer } = require("apollo-server-express");
const postTypeDefs = require("./typeDefs/post.typeDefs");
const postResolvers = require("./resolvers/post.resolver");
const userTypeDefs = require("./typeDefs/user.typeDefs");
const userResolvers = require("./resolvers/user.resolver");

const mongoose = require("mongoose");


async function startServer() {
    const app = express()

    const typeDefs = [postTypeDefs, userTypeDefs];
    const resolvers = [postResolvers, userResolvers];

    const apolloServer = new ApolloServer({
        typeDefs,
        resolvers
    });
    await apolloServer.start()
    apolloServer.applyMiddleware({ app: app })
    app.use((req, res) => {
        res.send("welcome to apollo server")
    })
    await mongoose.connect("mongodb+srv://yugandhar:7032292232@mydatabase.i6jal.mongodb.net/chat-app?retryWrites=true&w=majority",
        {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        }, console.log("DB connected.."))
    app.listen(5000, () => { console.log("server is running on 5000 port") })
}
startServer()