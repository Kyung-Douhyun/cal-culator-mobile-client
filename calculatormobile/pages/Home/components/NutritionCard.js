import React from 'react';
import { PricingCard } from 'react-native-elements';

const labels = {
	calories: 'kcal',
	fat: 'g',
	carbohydrate: 'g',
	sugar: 'g',
	protein: 'g',
	sodium: 'mg',
	cholesterol: 'mg',
	iron: 'mg',
	calcium: 'mg',
	vitamin_a: 'IU',
	vitamin_d: 'IU',
	zinc: 'mg',
};

export default function NutritionCard({ nutrition }) {
	const [nutritionName, amount] = nutrition;
	return (
		<PricingCard
			color='#4f9deb'
			title={`${nutritionName} (${labels[nutritionName]})`}
			titleStyle={{ fontSize: 20 }}
			price={`Consumed: ${amount.toFixed(2)}`}
			pricingStyle={{ fontSize: 25 }}
			// info={[`Recommended: ${recommendedDaily[nutritionName]}`]}
			button={{ style: { display: 'none' } }}
		/>
	);
}
