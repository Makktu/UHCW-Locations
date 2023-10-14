import { StyleSheet, Text, View, FlatList } from 'react-native';
import React from 'react';

export default function DisplayResults({ results }) {
  return (
    <View style={styles.displayArea}>
      {results ? (
        <FlatList
          data={results}
          keyExtractor={(item) => item['Room Num']}
          renderItem={({ item }) => (
            <View
              style={
                results.length == 1 ? styles.singularStyle : styles.resultStyle
              }
            >
              <View>
                <Text
                  style={
                    results.length == 1 ? styles.singularResult : styles.results
                  }
                >
                  {item['Wing'].length > 14
                    ? item['Wing'].slice(0, 14)
                    : item['Wing']}
                </Text>
                <Text
                  style={
                    results.length == 1 ? styles.singularResult : styles.results
                  }
                >
                  {item['Department'].length > 18
                    ? item['Department'].slice(0, 18)
                    : item['Department']}
                </Text>
              </View>

              <View>
                <Text
                  style={
                    results.length == 1 ? styles.singularResult : styles.results
                  }
                >
                  {item['Description'].length > 12 && results.length !== 1
                    ? item['Description'].slice(0, 12)
                    : item['Description']}
                </Text>
                <Text
                  style={
                    results.length == 1 ? styles.singularResult : styles.results
                  }
                >
                  {item['Room Num']}
                </Text>
              </View>
            </View>
          )}
        />
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  results: {
    fontSize: 16,
    color: '#10100f',
    margin: 2,
    width: '100%',
    fontWeight: 'bold',
  },
  singularResult: {
    fontSize: 22,
    color: '#10100f',
    margin: 2,
    width: '100%',
    fontWeight: 'bold',
  },
  displayArea: {
    padding: 20,
  },
  resultStyle: {
    borderWidth: 6,
    borderColor: '#f5f5ef',
    borderRadius: 10,
    marginVertical: 6,
    padding: 6,
    backgroundColor: '#e3f3ae',
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  singularStyle: {
    borderWidth: 6,
    borderColor: '#0de405',
    borderRadius: 10,
    marginVertical: '5%',
    padding: 30,
    backgroundColor: '#81e596',
    width: '100%',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
});
