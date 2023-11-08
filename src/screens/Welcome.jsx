import { StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import MainButton from '../components/MainButton';
import SearchInput from '../components/SearchInput';
import DisplayResults from '../components/DisplayResults';

const locationData = require('./../../data/locations.json');

export default function Welcome({ message, platform }) {
  const [searching, setSearching] = useState(false);
  const [enteredText, setEnteredText] = useState('');
  const [results, setResults] = useState([]);
  const [outcomeMsg, setOutcomeMsg] = useState('');

  const searchHandler = (theText) => {
    if (!searching) {
      setSearching(true);
    }
    if (!theText) {
      setResults([]);
      return;
    }

    theText = theText.toUpperCase();

    let newResults = [];

    for (let k = 1; k < 5963; k++) {
      let thisRoom = locationData[0][k + '']['Room Num'];
      let thisDescription = locationData[0][k + '']['Description'];
      let thisDepartment = locationData[0][k + '']['Department'];
      if (
        (thisRoom?.includes(theText) ||
          thisDescription?.includes(theText) ||
          thisDepartment?.includes(theText)) &&
        newResults.length < 30
      ) {
        newResults.push(locationData[0][k + '']);
      }
    }

    setResults(newResults);

    if (newResults.length == 0 && enteredText.length > 3) {
      setOutcomeMsg('No Result...');
    } else {
      setOutcomeMsg('');
    }
  };

  const cancelHandler = () => {
    setOutcomeMsg('');
    setEnteredText('');
    setResults([]);
  };

  const inputHandler = (enteredText) => {
    setEnteredText(enteredText);
    searchHandler(enteredText);
  };

  return (
    <>
      <View style={styles.inner}>
        <View
          style={
            platform == 'ios' ? styles.welcomeContainer : styles.nonIosContainer
          }
        >
          <Text
            style={platform == 'ios' ? styles.welcome : styles.nonIosWelcome}
          >
            {message}
          </Text>
        </View>
        <View style={styles.resultsDisplay}>
          {outcomeMsg ? <Text style={styles.outcome}>{outcomeMsg}</Text> : null}
          <DisplayResults results={results} />
        </View>
        <View style={styles.searchBox}>
          <SearchInput enteredText={enteredText} inputHandler={inputHandler} />
          <MainButton whenPressed={cancelHandler} textContent='Clear' />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
  },
  inner: {
    flex: 1,
    alignItems: 'center',
  },
  resultsDisplay: {
    flex: 1,
  },
  welcome: {
    fontSize: 36,
    fontFamily: 'interblack',
    color: 'whitesmoke',
    backgroundColor: '#15b2e1',
    paddingVertical: 10,
    paddingHorizontal: 30,
    marginTop: 2,
  },
  nonIosWelcome: {
    fontSize: 28,
    fontFamily: 'interblack',
    color: 'whitesmoke',
    backgroundColor: '#15b2e1',
    paddingVertical: 10,
    paddingHorizontal: 30,
    marginTop: 2,
  },
  welcomeContainer: {
    width: '100%',
    borderRadius: 12,
    overflow: 'hidden',
  },
  nonIosContainer: {
    width: '100%',
    borderRadius: 12,
    overflow: 'hidden',
    marginTop: 45,
  },
  searchBox: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: 0,
  },
  outcome: {
    fontSize: 36,
    fontWeight: 'bold',
    color: 'orangered',
    marginVertical: 100,
  },
});
