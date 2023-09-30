import { StyleSheet, Text, View, TextInput } from 'react-native';
import React, { useState } from 'react';
import MainButton from '../components/MainButton';
import SearchInput from '../components/SearchInput';

export default function Welcome({ message }) {
  const [searching, setSearching] = useState(false);
  const [enteredText, setEnteredText] = useState('Search Here');

  const searchHandler = () => {
    setSearching(!searching);
  };

  const enteredTextHandler = (enteredText) => {
    setEnteredText(enteredText);
  };

  return (
    <>
      <View>
        <Text style={styles.welcome}>{message}</Text>
      </View>
      <View>{searching ? <SearchInput /> : null}</View>
      <View style={styles.buttonsContainer}>
        <MainButton whenPressed={searchHandler} textContent='Search' />
        {searching ? <MainButton textContent='Cancel' /> : null}
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  welcome: {
    fontSize: 36,
    fontFamily: 'interblack',
    color: 'whitesmoke',
  },
  buttonsContainer: {
    flexDirection: 'row',
  },
});
