import { StyleSheet, NativeModules } from 'react-native';

export const homeStyle = StyleSheet.create({});

export const globalStyle = StyleSheet.create({
	page: {
		flexDirection: 'column',
		flex: 1,
	},
	header: {
		flex: 1,
		flexDirection: 'row',
		alignItems: 'flex-end',
		justifyContent: 'center',
		backgroundColor: 'red',
	},
	container: {
		flex: 8,
	},
	footer: {
		flex: 1,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-around',
		backgroundColor: 'red',
	},
});
