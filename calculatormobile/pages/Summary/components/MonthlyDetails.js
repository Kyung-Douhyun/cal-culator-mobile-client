import React, { useState } from 'react';
import { useQuery } from '@apollo/client';
import { foodusersDailyQuery } from '../queries';
import { ScrollView, View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { PricingCard } from 'react-native-elements';

import { connect } from 'react-redux';
import * as actionTypes from '../../../store/actions';

import dailyRecommendation from '../helperFunctions/dailyRecommendation';
import calculateCalories from '../helperFunctions/calculateCalories';

function Item({ dateNCalories, recommendedDaily, checkSpecificDate }) {
	const { x: date, y: consumedCalories } = dateNCalories;
	const { calories: recommendedCalories } = recommendedDaily;
	return (
		<TouchableOpacity onPress={() => checkSpecificDate(date)}>
			<PricingCard
				color='#4f9deb'
				title='Calories (kcal)'
				titleStyle={{ fontSize: 20 }}
				price={date}
				pricingStyle={{ fontSize: 25 }}
				info={[`Recommended: ${recommendedCalories}`, `Consumed: ${consumedCalories.toFixed(2)}`]}
				button={{ style: { display: 'none' } }}
			/>
		</TouchableOpacity>
	);
}

function MonthlyDetails({ userInfo, summaryInfo, checkSpecificDate }) {
	const recommendedDaily = dailyRecommendation(userInfo.userAge, userInfo.userGender);
	const [monthlyData, setMonthlyData] = useState([]);
	const { loading } = useQuery(foodusersDailyQuery, {
		variables: {
			user_id: userInfo.userId,
			date: summaryInfo.date,
			dwm: summaryInfo.dwm,
		},
		onCompleted: data => {
			setMonthlyData(calculateCalories(data, summaryInfo.date));
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
				{monthlyData.length === 0 ? (
					<Text>You haven't eaten anything in this period!</Text>
				) : (
					monthlyData.map((dateNCalories, idx) => (
						<Item
							key={idx}
							dateNCalories={dateNCalories}
							recommendedDaily={recommendedDaily}
							checkSpecificDate={checkSpecificDate}
						/>
					))
				)}
			</ScrollView>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flexDirection: 'column',
		flex: 12,
		justifyContent: 'center',
		backgroundColor: '#eee',
		display: 'flex',
	},
});

const mapStateToProps = state => {
	return {
		userInfo: state.userInfo,
		summaryInfo: state.summaryInfo,
	};
};

const mapDispatchToProps = dispatch => {
	return {
		checkSpecificDate: date => {
			dispatch({ type: actionTypes.DETAIL_SPECIFIC_DATE, payload: date });
		},
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(MonthlyDetails);
