import React, { useState } from 'react';
import { View, StyleSheet, Text, TouchableOpacity, ScrollView } from 'react-native';
import { useQuery } from '@apollo/client';
import { connect } from 'react-redux';
import Recommend from './Recommend';
import { yesterdayNutritionQuery } from '../queries';

function RecommendContainer({ userInfo }) {
	const [nutritions, setNutritions] = useState(['calcium', 'iron', 'protein']);
	const { loading, data } = useQuery(yesterdayNutritionQuery, {
		variables: {
			date: '2020-09-28',
			user_id: userInfo.userId,
		},
		onCompleted: data => {
			console.log(data);
		},
	});
	return (
		<View style={styles.container}>
			<View style={styles.title}>
				<Text style={styles.font}>어제의 데이터에 따르면...</Text>
			</View>
			<View style={styles.recommend}>
				<ScrollView style={styles.recommendScroll}>
					{nutritions.map((item, idx) => {
						return <Recommend nutritionName={item} key={idx} />;
					})}
				</ScrollView>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 10,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#eee',
	},
	title: {
		flex: 0.8,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#eee',
	},
	font: {
		fontSize: 16,
		fontWeight: 'bold',
	},
	recommend: {
		flex: 9.2,
		width: '100%',
		alignItems: 'center',
		backgroundColor: '#eee',
	},
	recommendScroll: {
		width: '95%',
		height: '100%',
		backgroundColor: '#eee',
	},
});

const mapStateToProps = state => {
	return {
		userInfo: state.userInfo,
	};
};

export default connect(mapStateToProps)(RecommendContainer);
