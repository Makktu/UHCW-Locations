import { StyleSheet, View, TextInput } from 'react-native';
import React, { useState } from 'react';

export default function SearchInput({ inputHandler }) {
  const [enteredText, setEnteredText] = useState('');

  const enteredTextHandler = (enteredText) => {
    setEnteredText(enteredText);
    inputHandler(enteredText);
  };
  return (
    <View style={styles.textBox}>
      <TextInput
        style={styles.textInput}
        maxLength={16}
        autoCapitalize='characters'
        autoCorrect={false}
        value={enteredText}
        onChangeText={enteredTextHandler}
        placeholder='Search'
        placeholderTextColor='black'
      />
    </View>
  );
}

const styles = StyleSheet.create({
  textBox: {
    height: 100,
    width: '90%',
  },
  textInput: {
    fontSize: 32,
    fontFamily: 'interregular',
    backgroundColor: '#eae0e0',
    color: 'whitesmoke',
    marginVertical: 8,
    padding: 20,
    color: 'black',
    textAlign: 'center',
    borderRadius: 20,
  },
});
