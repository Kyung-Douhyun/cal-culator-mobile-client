import React from 'react';
import Swiper from 'react-native-swiper';

import Home from './pages/Home/Home';
import Cart from './pages/Cart/Cart';
import Summary from './pages/Summary/Summary';
import Recommendation from './pages/Recommendation/Recommendation';
import About from './pages/About/About';

export default function App() {
	return (
		<Swiper loop={false} showsPagination={false}>
			<Home />
			<Cart />
			<Summary />
			<Recommendation />
			<About />
		</Swiper>
	);
}
