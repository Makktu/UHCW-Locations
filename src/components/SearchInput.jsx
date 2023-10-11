import { StyleSheet, View, TextInput, useColorScheme } from 'react-native';
import React from 'react';

export default function SearchInput({ enteredText, inputHandler }) {
  return (
    <View style={styles.textBox}>
      <TextInput
        style={styles.textInput}
        maxLength={16}
        autoCapitalize='characters'
        autoCorrect={false}
        value={enteredText}
        onChangeText={inputHandler}
        placeholder='Search'
        placeholderTextColor='black'
        keyboardAppearance='dark'
      />
    </View>
  );
}

const styles = StyleSheet.create({
  textBox: {
    height: 54,
    width: '70%',
  },
  textInput: {
    height: 54,
    fontSize: 26,
    fontFamily: 'interregular',
    backgroundColor: '#eae0e0',
    color: 'whitesmoke',
    padding: 2,
    color: 'black',
    textAlign: 'center',
    borderRadius: 4,
  },
});
