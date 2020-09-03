import gql from 'graphql-tag';

const LOGIN = gql`
  mutation login($email: String!, $password: String!) {
    addUser(email: $email, password: $password) {
      id
      name
      email
    }
  }
`;

export default LOGIN;
