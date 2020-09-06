import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Icon } from 'react-native-elements';

export default function Support() {
	return (
		<View style={styles.container}>
			<Icon name='donate' type='font-awesome-5' />
			<Text>Donate</Text>
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
