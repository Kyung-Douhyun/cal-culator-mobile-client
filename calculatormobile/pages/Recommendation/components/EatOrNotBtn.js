import React, { useState } from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';

export default function EatOrNotBtn({ setIsDoEat }) {
	return (
		<View style={styles.container}>
			<TouchableOpacity style={{ ...styles.btn, backgroundColor: 'lightgreen' }}
				onPress={() => setIsDoEat(true)}
			>
				<Text style={styles.text}>섭취하세요</Text>
			</TouchableOpacity>
			<TouchableOpacity style={{ ...styles.btn, backgroundColor: '#F30' }}
				onPress={() => setIsDoEat(false)}
			>
				<Text style={styles.text}>그만드세요</Text>
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
	text: {
		fontWeight: 'bold',
	}
});
