import { gql } from '@apollo/client';

export const yesterdayNutritionQuery = gql`
	query yesterdayNutrition($date: Date!, $user_id: ID!) {
		foodusersDate(user_id: $user_id, date: $date, dwm: "daily") {
			amount
			foods {
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
	}
`;
