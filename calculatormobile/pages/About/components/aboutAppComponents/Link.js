import React from 'react';
import { View, StyleSheet, Text, Linking } from 'react-native';
import { Icon } from 'react-native-elements';

export default function Link() {
	return (
		<View style={styles.container}>
			<Icon name='github' type='antdesign' />
			<Text onPress={() => Linking.openURL('https://github.com')}>Github</Text>
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
