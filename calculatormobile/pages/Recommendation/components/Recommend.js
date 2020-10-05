import React from 'react';
import { StyleSheet, Text, ImageBackground, Image, View } from 'react-native';
import redbg from '../../../asset/Image/redbg.jpeg';
import greenbg from '../../../asset/Image/greenbg.jpeg';

export default function Recommend({ isDoEat, nutrition }) {
	return (
		<View style={styles.container}>
			<Image source={isDoEat ? greenbg : redbg} style={{
				height: 250,
				width: 250,
				borderRadius: 250 / 2
			}}
			/>
			<Text style={styles.text}>{nutrition}</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		justifyContent: 'center',
		alignItems: 'center',
		marginVertical: 10,
		opacity: 0.85
	},
	text: {
		zIndex: 1,
		position: 'absolute',
		fontSize: 25,
		fontWeight: 'bold'
	}
});
