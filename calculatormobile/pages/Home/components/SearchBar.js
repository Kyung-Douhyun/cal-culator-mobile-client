import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import * as actionTypes from '../../../store/actions';

function SearchBar({ searchHandler }) {
	const [text, setText] = useState('');

	return (
		<View style={styles.container}>
			<View style={styles.searchInput}>
				<TextInput placeholder='what did i eat' onChangeText={val => setText(val)} value={text} />
			</View>
			<TouchableOpacity
				style={styles.searchBtn}
				onPress={() => {
					searchHandler(text);
					setText('');
				}}
			>
				<Text>Search</Text>
			</TouchableOpacity>
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
		justifyContent: 'center',
	},
	searchBtn: {
		backgroundColor: 'lightgreen',
		height: '100%',
		justifyContent: 'center',
		alignItems: 'center',
		width: '20%',
	},
});

const mapStateToProps = state => {
	return {
		homeInfo: state.homeInfo,
	};
};

const mapDispatchToProps = dispatch => {
	return {
		searchHandler: foodName => {
			dispatch({ type: actionTypes.SEARCH_HANDLER, payload: foodName });
		},
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);
