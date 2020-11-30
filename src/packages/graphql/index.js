const graphqlHTTP = require('express-graphql');
import { root, schema } from './schema'
export default (app) => {
    app.use('/graphql', graphqlHTTP({
        schema: schema,
        rootValue: root,
        graphiql: true //set to false if you don't want graphiql enabled
    }));
}