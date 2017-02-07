const graphql = require('graphql');
const { GraphQLSchema } = graphql;

const RootQuery = require('./queries/root_query');

module.exports = new GraphQLSchema({
  query: RootQuery
});
