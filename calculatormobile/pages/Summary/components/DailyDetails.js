import React, { useState } from 'react';
import { useQuery } from '@apollo/client';
import { foodusersDailyQuery } from '../queries';
import { ScrollView, View, StyleSheet, Text } from 'react-native';
import { PricingCard } from 'react-native-elements';

import { connect } from 'react-redux';
import * as actionTypes from '../../../store/actions';
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

function DailyDetails({ userInfo, summaryInfo }) {
	const recommendedDaily = dailyRecommendation(userInfo.userAge, userInfo.userGender);
	const [dailyData, setDailyData] = useState([]);

	const { loading } = useQuery(foodusersDailyQuery, {
		variables: {
			user_id: '5f4a4b1a5668613a24e4e744',
			date: summaryInfo.date,
			dwm: summaryInfo.dwm,
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

const mapStateToProps = state => {
	return {
		userInfo: state.userInfo,
		summaryInfo: state.summaryInfo,
	};
};

export default connect(mapStateToProps)(DailyDetails);
