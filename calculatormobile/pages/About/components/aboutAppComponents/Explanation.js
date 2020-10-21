import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Card } from 'react-native-elements';

export default function Chart() {
	return (
		<View style={styles.container}>
			<Text>설명을 적어놓는 칸</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 12,
		marginHorizontal: 10,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: 'gray',
	},
});
