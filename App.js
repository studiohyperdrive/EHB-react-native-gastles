import React from 'react';
import { StyleSheet, Text, ScrollView } from 'react-native';

import { Plant } from './components/Plant/Plant';
import { plants } from './assets/plants';

export default function App() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Plantenapp</Text>
      {
        plants.map((plant, key) => (
          <Plant plant={plant} key={key} />
        ))
      }
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 20,
    backgroundColor: "#deffdf",
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    marginBottom: 20,
  }
});
