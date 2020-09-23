import React, { useState } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { VictoryChart, VictoryPolarAxis, VictoryBar, VictoryTheme } from 'victory-native';
import { useQuery } from '@apollo/client';

import { connect } from 'react-redux';
import dailyRecommendation from '../helperFunctions/dailyRecommendation';
import calculateIntake from '../helperFunctions/calculateIntake';

import { foodusersDailyQuery } from '../queries';

const lables = [
	'calories',
	'fat',
	'carbohydrate',
	'sugar',
	'protein',
	'sodium',
	'cholesterol',
	'iron',
	'calcium',
	'vitamin_a',
	'vitamin_d',
];

const defaultDailyData = [
	{ x: 'calories', y: 0 },
	{ x: 'fat', y: 0 },
	{ x: 'carbohydrate', y: 0 },
	{ x: 'sugar', y: 0 },
	{ x: 'protein', y: 0 },
	{ x: 'sodium', y: 0 },
	{ x: 'cholesterol', y: 0 },
	{ x: 'iron', y: 0 },
	{ x: 'calcium', y: 0 },
	{ x: 'vitamin_a', y: 0 },
	{ x: 'vitamin_d', y: 0 },
];

function DailyChart({ userInfo, summaryInfo }) {
	const recommendedDaily = dailyRecommendation(userInfo.userAge, userInfo.userGender);
	const [dailyData, setDailyData] = useState(defaultDailyData);
	const { loading } = useQuery(foodusersDailyQuery, {
		variables: {
			user_id: '5f4a4b1a5668613a24e4e744',
			date: summaryInfo.date,
			dwm: summaryInfo.dwm,
		},
		onCompleted: data => {
			setDailyData(calculateIntake(recommendedDaily, data.foodusersDate));
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
			<VictoryChart
				polar
				theme={VictoryTheme.material}
				animate={{ duration: 1000, easing: 'bounce' }}
			>
				{lables.map((d, i) => {
					return (
						<VictoryPolarAxis
							dependentAxis
							key={i}
							label={d}
							labelPlacement='perpendicular'
							style={{ tickLabels: { fill: 'none' } }}
							axisValue={d}
						/>
					);
				})}
				<VictoryBar
					style={{
						data: {
							fill: ({ datum }) => {
								return datum.x === 'calories' ? '#000000' : 'tomato';
							},
							stroke: ({ index }) => (+index % 2 === 0 ? '#000' : '#fff'),
							width: 20,
							strokeWidth: 3,
							fillOpacity: 0.7,
						},
					}}
					data={dailyData}
				/>
			</VictoryChart>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flexDirection: 'column',
		flex: 12,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#eee',
	},
});

const mapStateToProps = state => {
	return {
		userInfo: state.userInfo,
		summaryInfo: state.summaryInfo,
	};
};

export default connect(mapStateToProps)(DailyChart);
