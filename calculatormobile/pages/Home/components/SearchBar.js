import React from 'react';
import { View, Text, TextInput, StyleSheet, Button } from 'react-native';

export default function SearchBar() {
	return (
		<View style={styles.container}>
			<View style={styles.searchInput}>
				<TextInput placeholder='what did i eat' />
			</View>
			<View style={styles.searchBtn}>
				<Button title='Search' />
			</View>
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
		marginBottom: 10,
	},
	searchInput: {
		backgroundColor: '#eee',
		width: '70%',
		height: '100%',
	},
	searchBtn: {
		backgroundColor: 'lightgreen',
		height: '100%',
	},
});
