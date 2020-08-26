import React, { useState } from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';

export default function Recommend({ nutritionName }) {
	return (
		<TouchableOpacity style={styles.container}>
			<Text>{nutritionName}</Text>
		</TouchableOpacity>
	);
}

const styles = StyleSheet.create({
	container: {
		height: 40,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: 'yellow',
		marginVertical: 10,
	},
});
