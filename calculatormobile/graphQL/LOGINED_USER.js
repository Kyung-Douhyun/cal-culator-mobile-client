import { gql } from '@apollo/client';

const LOGINED_USER = gql`
	mutation loginedUser($id: String!) {
		loginedUser(id: $id) {
			id
			name
			email
			# gender
			# age
			# weight
			# height
		}
	}
`;

export default LOGINED_USER;
