import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

export default function Link() {
	return (
		<View style={styles.container}>
			<Text>github repo link</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: 'gray',
	},
});
