import React from 'react';
import { View, StyleSheet, Image } from 'react-native';
import { connect } from 'react-redux';

function FoodImage({ homeInfo }) {
	const image = homeInfo.foodInfo.image;
	return (
		<View style={styles.container}>
			<Image source={typeof image === 'number' ? image : { uri: image }} style={styles.img} />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		flex: 4,
		justifyContent: 'space-around',
		display: 'flex',
		alignItems: 'center',
		backgroundColor: 'blue',
		marginBottom: 10,
	},
	img: {
		height: '100%',
		width: '100%',
		resizeMode: 'contain',
	},
});

const mapStateToProps = state => {
	return {
		homeInfo: state.homeInfo,
	};
};

export default connect(mapStateToProps)(FoodImage);
