import React, { useState } from 'react';
import { View, StyleSheet, Text, TouchableOpacity, ScrollView } from 'react-native';

import Recommend from './Recommend';

export default function RecommendContainer() {
	const [nutritions, setNutritions] = useState(['calcium', 'iron', 'protein']);

	return (
		<View style={styles.container}>
			<Text style={styles.title}>어제의 데이터에 따르면...</Text>
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
		backgroundColor: 'pink',
	},
	title: {
		flex: 0.8,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: 'white',
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
		backgroundColor: 'blue',
	},
});
