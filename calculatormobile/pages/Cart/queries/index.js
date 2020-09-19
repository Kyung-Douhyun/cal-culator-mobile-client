import { gql } from '@apollo/client';

export const addFoodUsersQuery = gql`
	mutation addFoodUser($list: [FooduserInput]!) {
		addFoodUser(list: $list) {
			id
		}
	}
`;
