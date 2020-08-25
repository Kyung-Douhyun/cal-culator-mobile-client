import React from 'react';
import Swiper from 'react-native-swiper';
import Home from './pages/Home/Home';

export default function App() {
	return (
		<Swiper loop={false} showsPagination={false}>
			<Home />
		</Swiper>
	);
}
