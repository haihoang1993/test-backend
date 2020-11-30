const _ = require('lodash');


import UserType from './user.schema';
import UserDB from '../users/repository';


let {
  buildSchema
} = require('graphql');

// GraphQL schema
var schema = buildSchema(`
    type Query {
        users: [User],
        getUser(name: String!): User
    },
    type User {
        name: String
        email: String
    }
`);

const root = {
  getUser: async (args) => {
    const { name } = args;
    return await UserDB.findOneBy({ name })
  },
  users: async () => {
    return await UserDB.findBy({});
  }
}

export {
  root,
  schema
};