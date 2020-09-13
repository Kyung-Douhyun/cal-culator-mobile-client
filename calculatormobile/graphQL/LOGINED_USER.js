import { gql } from '@apollo/client';

const LOGINED_USER = gql`
	query {
		loginedUser {
			id
			name
			email
		}
	}
`;

export default LOGINED_USER;
