import { StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import MainButton from '../components/MainButton';

export default function Welcome({ message }) {
  const [searching, setSearching] = useState(false);
  return (
    <>
      <View>
        <Text style={styles.welcome}>{message}</Text>
      </View>
      <View style={styles.buttonsContainer}>
        <MainButton textContent='Search' />
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
