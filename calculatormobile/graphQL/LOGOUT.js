import { gql } from '@apollo/client';

const LOGOUT = gql`
	mutation Logout($id: String!) {
		logout(id: $id) {
			id
		}
	}
`;

export default LOGOUT;
