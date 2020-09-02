import React, { useState } from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';

export default function EatOrNotBtn() {
	return (
		<View style={styles.container}>
			<TouchableOpacity style={{ ...styles.btn, backgroundColor: 'lightgreen' }}>
				<Text>What To Eat</Text>
			</TouchableOpacity>
			<TouchableOpacity style={{ ...styles.btn, backgroundColor: '#F30' }}>
				<Text>Don't Eat</Text>
			</TouchableOpacity>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: 'row',
		justifyContent: 'space-around',
		alignItems: 'center',
	},
	btn: {
		width: '25%',
		height: '50%',
		justifyContent: 'center',
		alignItems: 'center',
		borderRadius: 6,
	},
});
