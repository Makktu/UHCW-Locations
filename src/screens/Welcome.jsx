import { StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import MainButton from '../components/MainButton';
import SearchInput from '../components/SearchInput';

export default function Welcome({ message }) {
  const [searching, setSearching] = useState(false);
  let searchTerm = '';

  const searchHandler = () => {
    if (!searching) {
      setSearching(true);
      return;
    } else if (searching && !searchTerm) {
      console.log('no search term entered');
      return;
    }
    console.log(searchTerm);
  };

  const cancelHandler = () => {
    // setCancelled(true);
  };

  const inputHandler = (enteredText) => {
    searchTerm = enteredText;
  };

  return (
    <>
      <View>
        <Text style={styles.welcome}>{message}</Text>
      </View>
      {searching ? (
        <View style={styles.searchBox}>
          <SearchInput inputHandler={inputHandler} />
        </View>
      ) : null}
      <View style={styles.buttonsContainer}>
        <MainButton whenPressed={searchHandler} textContent='Search' />
        {searching ? (
          <MainButton whenPressed={cancelHandler} textContent='Cancel' />
        ) : null}
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
