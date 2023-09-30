import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Welcome from './src/screens/Welcome';
import { useFonts } from 'expo-font';

export default function App() {
  const [fontsLoaded] = useFonts({
    interblack: require('./assets/fonts/Inter-Black.otf'),
    interlight: require('./assets/fonts/Inter-Light.otf'),
    interregular: require('./assets/fonts/Inter-Regular.otf'),
  });

  return (
    <View style={styles.container}>
      <Welcome message='UHCW Location Numbers' />
      <StatusBar style='light' />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#030038',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
