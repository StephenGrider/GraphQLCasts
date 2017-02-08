const graphql = require('graphql');
const { GraphQLObjectType } = graphql;

const RootQueryType = new GraphQLObjectType({
  name: 'RootQueryType'
});

module.exports = RootQueryType;
