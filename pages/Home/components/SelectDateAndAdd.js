import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function SelectDateAndAdd() {
	return (
		<View style={styles.container}>
			<Text>SelectDate and Add</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		flex: 1,
		justifyContent: 'space-around',
		display: 'flex',
		alignItems: 'center',
		backgroundColor: 'pink',
	},
});
