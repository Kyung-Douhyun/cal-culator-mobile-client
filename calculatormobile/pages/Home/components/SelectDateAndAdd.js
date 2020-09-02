import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function SelectDateAndAdd() {
	return (
		<View style={styles.container}>
			<View>
				<Text>날짜입력</Text>
			</View>
			<View>
				<Text>카트담기</Text>
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
		backgroundColor: 'pink',
	},
});
