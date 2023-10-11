import { StyleSheet, Text, View, Pressable } from 'react-native';
import React from 'react';

export default function MainButton({ textContent, whenPressed }) {
  return (
    <Pressable onPress={whenPressed}>
      <View style={styles.button}>
        <Text style={styles.buttonText}>{textContent}</Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    width: 74,
    height: 54,
    backgroundColor: '#15b2e1',
    margin: 4,
    borderRadius: 4,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    fontFamily: 'interregular',
    fontSize: 20,
    color: 'white',
  },
});
