import React, { useState } from 'react';
import { useQuery } from '@apollo/client';
import { foodusersDailyQuery } from '../queries';
import { ScrollView, View, StyleSheet, Text } from 'react-native';
import { PricingCard } from 'react-native-elements';

import dailyRecommendation from '../helperFunctions/dailyRecommendation';
import calculateIntake from '../helperFunctions/calculateIntake';

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

function Item({ nutrition, recommendedDaily }) {
	const [nutritionName, amount] = nutrition;
	return (
		<PricingCard
			color='#4f9deb'
			title={`${nutritionName} (${labels[nutritionName]})`}
			titleStyle={{ fontSize: 20 }}
			price={`Consumed: ${amount.toFixed(2)}`}
			pricingStyle={{ fontSize: 25 }}
			info={[`Recommended: ${recommendedDaily[nutritionName]}`]}
			button={{ style: { display: 'none' } }}
		/>
	);
}

export default function DailyDetails({ dwm }) {
	const recommendedDaily = dailyRecommendation(26, 'Male');
	const [dailyData, setDailyData] = useState([]);

	const { loading, data } = useQuery(foodusersDailyQuery, {
		variables: {
			user_id: '5f4a4b1a5668613a24e4e744',
			date: dwm.date,
			dwm: dwm.type,
		},
		onCompleted: data => {
			setDailyData(calculateIntake(recommendedDaily, data.foodusersDate, 'details'));
		},
	});

	if (loading) {
		return (
			<View style={styles.container}>
				<Text>Loading...</Text>
			</View>
		);
	}

	return (
		<View style={styles.container}>
			<ScrollView>
				{dailyData.map((nutrition, idx) => (
					<Item key={idx} nutrition={nutrition} recommendedDaily={recommendedDaily} />
				))}
			</ScrollView>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flexDirection: 'column',
		flex: 12,
		justifyContent: 'center',
		backgroundColor: '#ddd',
		display: 'flex',
	},
});
