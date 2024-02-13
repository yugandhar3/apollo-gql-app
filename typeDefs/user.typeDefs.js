const { gql } = require("apollo-server-express");

const userTypeDefs = gql`
 scalar BigInt

type user {
    id:ID
    name:String
    email:String
    phoneNo:BigInt
    age:Int
}
type Query {
    getAllUsers:[user],
    getUserById(id:ID):user
}

input userInput {
    name:String
    email:String
    phoneNo:BigInt
    age:Int
}

type Mutation {
    createUser(user:userInput):user
    deleteUser(id:ID):user
    updateUser(id:ID,user:userInput):user
}
`;
module.exports = userTypeDefs