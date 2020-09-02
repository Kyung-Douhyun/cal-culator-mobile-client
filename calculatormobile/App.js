import React from 'react';
import {ApolloClient, InMemoryCache, ApolloProvider, gql} from '@apollo/client';
import Swiper from 'react-native-swiper';
import Home from './pages/Home/Home';
import Cart from './pages/Cart/Cart';
import Summary from './pages/Summary/Summary';
import Recommendation from './pages/Recommendation/Recommendation';
import About from './pages/About/About';

const client = new ApolloClient({
  uri: 'http://localhost:4001/graphql',
  cache: new InMemoryCache(),
});

export default function App() {
  return (
    <ApolloProvider client={client}>
      <Swiper loop={false} showsPagination={false}>
        <Home />
        <Cart />
        <Summary />
        <Recommendation />
        <About />
      </Swiper>
    </ApolloProvider>
  );
}
