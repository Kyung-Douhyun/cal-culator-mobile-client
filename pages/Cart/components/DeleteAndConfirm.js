import React from 'react';
import { Text, StyleSheet, TouchableOpacity, View } from 'react-native';

export default function DeleteAndConfirm() {
	return (
		<View style={styles.container}>
			<TouchableOpacity style={styles.deleteBtn}>
				<Text>Delete</Text>
			</TouchableOpacity>
			<TouchableOpacity style={styles.confirmBtn}>
				<Text>Confirm</Text>
			</TouchableOpacity>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1.5,
		backgroundColor: 'lightgreen',
		justifyContent: 'space-around',
		flexDirection: 'row',
	},
	deleteBtn: {
		width: '20%',
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: 'red',
	},
	confirmBtn: {
		width: '20%',
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: 'darkgreen',
	},
});
