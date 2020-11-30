const _ = require('lodash');

let {
    GraphQLString,
    GraphQLList,
    GraphQLObjectType,
    GraphQLNonNull,
    GraphQLSchema,
} = require('graphql');

const UserType = new GraphQLObjectType({
    name: "User",
    description: "This represent an user",
    fields: () => ({
        id: { type: new GraphQLNonNull(GraphQLString) },
        name: { type: new GraphQLNonNull(GraphQLString) },
        email: { type: GraphQLString }
    })
});

export default UserType;