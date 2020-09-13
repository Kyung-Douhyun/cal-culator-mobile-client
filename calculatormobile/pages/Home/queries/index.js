import { gql } from '@apollo/client';

export const searchFoodQuery = gql`
	query($name: String!) {
		foods(name: $name) {
			id
			image
			name
			calories
			fat
			carbohydrate
			sugar
			protein
			sodium
			cholesterol
			iron
			calcium
			zinc
			vitamin_a
			vitamin_d
		}
	}
`;
