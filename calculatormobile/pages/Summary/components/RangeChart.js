import React, { useState } from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import { VictoryChart, VictoryBar, VictoryAxis } from 'victory-native';
import { useQuery } from '@apollo/client';

import { foodusersRangeQuery } from '../queries';
import calculateCalories from '../helperFunctions/calculateCalories';

export default function RangeChart({ dwm }) {
	const [data, setData] = useState([]);
	const { loading } = useQuery(foodusersRangeQuery, {
		variables: {
			user_id: '5f4a4b1a5668613a24e4e744',
			date: dwm.date,
			dwm: dwm.type,
		},
		onCompleted: fetchedData => setData(calculateCalories(fetchedData, dwm.date)),
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
				<VictoryBar style={{ data: { fill: '#c43a31' } }} data={data} />
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
