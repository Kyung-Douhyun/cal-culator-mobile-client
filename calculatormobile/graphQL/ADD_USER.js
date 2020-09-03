import gql from 'graphql-tag';

const ADD_USER = gql`
  mutation addUser(
    $name: String!
    $email: String!
    $password: String!
    $gender: String
    $age: Int
  ) {
    addUser(
      name: $name
      email: $email
      password: $password
      gender: $gender
      age: $age
    ) {
      id
      name
      email
    }
  }
`;

export default ADD_USER;
