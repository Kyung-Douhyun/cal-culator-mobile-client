import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

export default function Support() {
	return (
		<View style={styles.container}>
			<Text>후원 좋아용</Text>
			<Text>국민: 123456-123-456</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: 'brown',
	},
});
