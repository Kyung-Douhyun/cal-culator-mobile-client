import { gql } from '@apollo/client';

export const searchFoodQuery = gql`
	query($name: String!) {
		foods(name: $name) {
			name
			calories
		}
	}
`;
