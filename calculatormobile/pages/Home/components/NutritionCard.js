import React from 'react';
import { StyleSheet } from 'react-native';
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
			color='#132743'
			title={`${nutritionName}`}
			titleStyle={{ fontSize: 20 }}
			price={`${amount.toFixed(2)} ${labels[nutritionName]}`}
			pricingStyle={{ fontSize: 25, color: '#333', fontWeight: '600' }}
			button={{ style: { display: 'none' } }}
			containerStyle={styles.card}
		/>
	);
}

const styles = StyleSheet.create({
	card: {
		borderRadius: 10,
		backgroundColor: '#a2de96',
		marginBottom: 5,
	},
});
