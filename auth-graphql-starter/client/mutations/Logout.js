import gql from 'graphql-tag';

export default gql`
  mutation {
    logout {
      id
      email
    }
  }
`;
