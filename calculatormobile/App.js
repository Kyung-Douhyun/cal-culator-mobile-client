import React from 'react';
import { ApolloClient, InMemoryCache, ApolloProvider, HttpLink } from '@apollo/client';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import 'react-native-gesture-handler';
import AboutStack from './stacks/AboutStack';
import HomeStack from './stacks/HomeStack';
import SummaryStack from './stacks/SummaryStack';
import CartStack from './stacks/CartStack';
import RecommendationStack from './stacks/RecommendationStack';

import store from './store/store';
import { Provider } from 'react-redux';

const Tab = createBottomTabNavigator();

const client = new ApolloClient({
	link: new HttpLink({ uri: 'http://localhost:4001/graphql', credentials: 'same-origin' }),
	cache: new InMemoryCache(),
});

export default function App() {
	return (
		<ApolloProvider client={client}>
			<Provider store={store}>
				<NavigationContainer>
					<Tab.Navigator initialRouteName='About'>
						<Tab.Screen name='Home' component={HomeStack} />
						<Tab.Screen name='Summary' component={SummaryStack} />
						<Tab.Screen name='Cart' component={CartStack} />
						<Tab.Screen name='Recommendation' component={RecommendationStack} />
						<Tab.Screen name='About' component={AboutStack} />
					</Tab.Navigator>
				</NavigationContainer>
			</Provider>
		</ApolloProvider>
	);
}
