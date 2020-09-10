import React from 'react';
import { View, StyleSheet, Image } from 'react-native';
import { connect } from 'react-redux';

function FoodImage({ homeInfo }) {
	return (
		<View style={styles.container}>
			<Image
				source={{ uri: 'https://spoonacular.com/recipeImages/749013-312x231.jpeg' }}
				style={styles.img}
			/>
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
		// resizeMode: 'contain',
		// height: '100%',
	},
});

const mapStateToProps = state => {
	return {
		homeInfo: state.homeInfo,
	};
};

export default connect(mapStateToProps)(FoodImage);
