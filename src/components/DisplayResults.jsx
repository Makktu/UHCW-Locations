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
            <View style={styles.resultStyle}>
              <View style={styles.leftStyle}>
                <Text style={styles.results}>
                  {item['Wing'].length > 15
                    ? item['Wing'].slice(0, 14)
                    : item['Wing']}
                </Text>
                <Text style={styles.results}>{item['Department']}</Text>
              </View>

              <View style={styles.rightStyle}>
                <Text style={styles.results}>{item['Description']}</Text>
                <Text style={styles.results}>{item['Room Num']}</Text>
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
  displayArea: {
    padding: 20,
    // height: '70%',
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
  rightStyle: {
    color: 'blue',
    fontWeight: 'bold',
  },
});
