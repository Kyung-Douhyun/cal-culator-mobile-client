import { gql } from '@apollo/client';

const ADD_USER_INFO = gql`
	mutation addUserInfo($email: String!, $gender: String!, $age: Int!) {
		addUserInfo(email: $email, gender: $gender, age: $age) {
			name
			email
		}
	}
`;

export default ADD_USER_INFO;
