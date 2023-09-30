import { StyleSheet, Text, View, Pressable } from 'react-native';
import React from 'react';

export default function MainButton({ textContent }) {
  return (
    <Pressable>
      <View style={styles.button}>
        <Text style={styles.buttonText}>{textContent}</Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    width: 100,
    height: 40,
    backgroundColor: 'gray',
    margin: 4,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    fontFamily: 'interregular',
    fontSize: 20,
  },
});
