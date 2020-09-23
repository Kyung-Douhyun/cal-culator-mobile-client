import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { Image } from 'react-native-elements';

export default function AboutApp() {
	return (
		<View style={styles.container}>
			<TouchableOpacity>
				<Image
					source={require('../asset/Image/cal-culator-logo.png')}
					style={{ width: 30, height: 30 }}
				/>
				<Text>calculator</Text>
			</TouchableOpacity>
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
