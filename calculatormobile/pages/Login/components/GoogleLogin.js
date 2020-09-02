import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default function GoogleLogin() {
  return (
    <View style={styles.container}>
      <Text>Google Login</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ddd',
  },
});
