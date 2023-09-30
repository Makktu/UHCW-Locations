import { StyleSheet, Text, View, TextInput } from 'react-native';
import React, { useState } from 'react';

export default function SearchInput() {
  const [enteredText, setEnteredText] = useState('Tap Here');

  const enteredTextHandler = (enteredText) => {
    setEnteredText(enteredText);
  };
  return (
    <View>
      <TextInput
        style={styles.textInput}
        maxLength={16}
        autoCapitalize='characters'
        autoCorrect={false}
        value={enteredText}
        onChangeText={enteredTextHandler}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  textInput: {
    height: 50,
    width: '90%',
    fontSize: 32,
    fontFamily: 'interregular',
    backgroundColor: 'gray',
    color: 'whitesmoke',
    marginVertical: 8,
  },
});
