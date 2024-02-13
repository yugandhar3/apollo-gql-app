const Post = require("./models/Post.model");

const resolvers = {
    Query: {
        hello: () => {
            return "hello world"
        },
        getAllPosts: async () => {
            return await Post.find();
        },
        getPostById: async (parent, { id }, context, info) => {
            return await Post.findById(id)
        }
    },
    Mutation: {
        createPosts: async (parent, args, context, info) => {
            const { title, descriptions } = args.post
            const post = new Post({ title, descriptions })
            await post.save()
            return post
        },
        deletePost: async (parent, { id }, context, info) => {
            return await Post.findByIdAndDelete(id)
        },
        updatePost: async (parent, args, context, info) => {
            const { id } = args;
            const { title, descriptions } = args.post;
            const post = await Post.findByIdAndUpdate(id, { title, descriptions }, { new: true })
            return post

        }

    }
}

module.exports = resolvers