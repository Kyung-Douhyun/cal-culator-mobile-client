import { gql } from '@apollo/client';

const LOGINED_USER = gql`
	query {
		loginedUser {
			id
			name
			email
			gender
			age
			weight
			height
		}
	}
`;

export default LOGINED_USER;
