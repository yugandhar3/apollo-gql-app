const User = require("../models/User.model");

const userResolvers = {
    Query: {
        getAllUsers: async () => {
            return await User.find()
        },
        getUserById: async (parent, { id }, context, info) => {
            return await User.findById(id)
        }
    },
    Mutation: {
        createUser: async (parent, args, context, info) => {
            const { name, email, phoneNo, age } = args.user

            const userData = new User({ name, email, phoneNo, age });
            await userData.save();
            return userData
        },
        deleteUser: async (parent, { id }, context, info) => {
            return User.findByIdAndDelete(id)
        },
        updateUser: async (parent, args, context, info) => {
            const { id } = args;
            const { name, email, phoneNo, age } = args.user;

            const userData = await User.findByIdAndUpdate(id, { name, email, phoneNo, age }, { new: true })
            return userData
        }
    }
}

module.exports = userResolvers