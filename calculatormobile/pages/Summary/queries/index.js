import { gql } from '@apollo/client';

export const foodusersDailyQuery = gql`
  query($user_id: ID!, $date: Date!, $dwm: String!) {
    foodusersDate(user_id: $user_id, date: $date, dwm: $dwm) {
      date
      amount
      food_id
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
        vitamin_a
        vitamin_d
        zinc
      }
    }
  }
`;
