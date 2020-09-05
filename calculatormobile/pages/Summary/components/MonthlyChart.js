import React, { useState } from 'react';
import { View, StyleSheet, Text, Dimensions } from 'react-native';
import { VictoryChart, VictoryArea, VictoryAxis, VictoryClipContainer } from 'victory-native';
import { useQuery } from '@apollo/client';

import { foodusersMonthlyQuery } from '../queries';
import calculateCalories from '../helperFunctions/calculateCalories';

export default function MonthlyChart({ dwm }) {
	const [monthlyData, setMonthlyData] = useState([]);
	const { loading } = useQuery(foodusersMonthlyQuery, {
		variables: {
			user_id: '5f4a4b1a5668613a24e4e744',
			date: '2020-09',
			dwm: 'monthly',
			// date: dwm.date,
			// dwm: dwm.type,
		},
		onCompleted: data => {
			setMonthlyData(calculateCalories(data, '2020-09'));
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
				height={Math.round(Dimensions.get('window').height) * 0.6}
				animate={{ duration: 500, easing: 'bounce' }}
			>
				<VictoryArea
					interpolation='cardinal' // OR natural
					groupComponent={<VictoryClipContainer clipPadding={{ top: 0 }} />}
					style={{ data: { stroke: '#c43a31', strokeWidth: 3 } }}
					data={monthlyData}
				/>
				<VictoryAxis
					dependentAxis
					label='Calories (kcal)'
					style={{
						tickLabels: { fontSize: 10, padding: 5 },
						axisLabel: { padding: 25 },
					}}
				/>
				<VictoryAxis
					label='Date'
					fixLabelOverlap={true}
					style={{
						tickLabels: { fontSize: 10, padding: 5 },
						axisLabel: { padding: 25 },
					}}
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
		backgroundColor: '#ddd',
	},
});

// [
//   { x: '2020-09-00', y: 3 },
//   { x: '2020-09-01', y: 1 },
//   { x: '2020-09-02', y: 0 },
//   { x: '2020-09-03', y: 5 },
// ]
