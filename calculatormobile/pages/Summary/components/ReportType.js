import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';

import * as actionTypes from '../../../store/actions';

function ReportType({ displayOption }) {
	return (
		<View style={styles.container}>
			<TouchableOpacity
				style={styles.card}
				onPress={() => {
					displayOption('chart');
				}}
			>
				<Text>Chart Report</Text>
			</TouchableOpacity>
			<TouchableOpacity
				style={styles.card}
				onPress={() => {
					displayOption('detail');
				}}
			>
				<Text>Detail Report</Text>
			</TouchableOpacity>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		flex: 2,
		justifyContent: 'space-around',
		alignItems: 'center',
		backgroundColor: 'pink',
	},
	card: {
		backgroundColor: 'green',
		justifyContent: 'center',
		alignItems: 'center',
		height: '30%',
		width: '30%',
		borderRadius: 5,
	},
});

const mapDispatchToProps = dispatch => {
	return {
		displayOption: type => {
			dispatch({ type: actionTypes.DISPLAY_OPTION, payload: type });
		},
	};
};

export default connect(null, mapDispatchToProps)(ReportType);
