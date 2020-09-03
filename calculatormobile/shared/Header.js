import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { globalStyle } from '../pages/styles/styles';

export default function Header({ pageName, setLoginOpen }) {
  const signInOutHandler = () => {
    setLoginOpen((prevState) => !prevState);
  };

  return (
    <View style={globalStyle.header}>
      <Text style={styles.logo}>Logo</Text>
      <Text style={styles.currentPage}>{pageName}</Text>
      <Text onPress={signInOutHandler} style={styles.signInOut}>
        Sign in/out
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  logo: {
    position: 'absolute',
    left: 0,
    paddingLeft: 15,
    paddingBottom: 15,
    fontWeight: 'bold',
  },
  currentPage: {
    paddingBottom: 15,
    fontWeight: 'bold',
  },
  signInOut: {
    position: 'absolute',
    right: 0,
    paddingBottom: 15,
    paddingRight: 15,
    fontWeight: 'bold',
  },
});
