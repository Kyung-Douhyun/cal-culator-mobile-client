import { gql } from '@apollo/client';

const DELETE_USER = gql`
	mutation deleteUser($email: String!) {
		deleteUser(email: $email) {
			id
			email
		}
	}
`;

export default DELETE_USER;
