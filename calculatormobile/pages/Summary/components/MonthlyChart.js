import React, { useState } from 'react';
import { View, StyleSheet, Text, Dimensions } from 'react-native';
import { VictoryChart, VictoryArea, VictoryAxis, VictoryClipContainer } from 'victory-native';
import { useQuery } from '@apollo/client';
import { connect } from 'react-redux';

import { foodusersMonthlyQuery } from '../queries';
import calculateCalories from '../helperFunctions/calculateCalories';

function MonthlyChart({ userInfo, summaryInfo }) {
	const [monthlyData, setMonthlyData] = useState([]);
	const { loading } = useQuery(foodusersMonthlyQuery, {
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

const mapStateToProps = state => {
	return {
		userInfo: state.userInfo,
		summaryInfo: state.summaryInfo,
	};
};

export default connect(mapStateToProps)(MonthlyChart);
