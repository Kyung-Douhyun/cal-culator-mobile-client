import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default function FacebookLogin() {
  return (
    <View style={styles.container}>
      <Text>Facebook Login</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'skyblue',
  },
});
