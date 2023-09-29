import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

export default function Welcome() {
  return (
    <View>
      <Text style={styles.welcome}>Welcome!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  welcome: {
    fontSize: 36,
    color: 'blue',
  },
});
