import { StatusBar } from 'expo-status-bar';
import {
  StyleSheet,
  SafeAreaView,
  View,
  KeyboardAvoidingView,
  Platform,
  ImageBackground,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Welcome from './src/screens/Welcome';
import { useFonts } from 'expo-font';

export default function App() {
  const [fontsLoaded] = useFonts({
    interblack: require('./assets/fonts/Inter-Black.otf'),
    interlight: require('./assets/fonts/Inter-Light.otf'),
    interregular: require('./assets/fonts/Inter-Regular.otf'),
  });

  return (
    <KeyboardAvoidingView
      style={styles.keyboardView}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <LinearGradient
        colors={['#4c669f', '#3b5998', '#192f6a']}
        style={styles.appContainerStyle}
      >
        <ImageBackground
          source={require('./assets/img/uhcw-main3.png')}
          resizeMode='cover'
          style={styles.appContainerStyle}
          imageStyle={styles.backgroundImage}
        >
          <SafeAreaView style={styles.mainView}>
            <View style={styles.container}>
              <Welcome message='UHCW Locations' />
              <StatusBar style='light' />
            </View>
          </SafeAreaView>
        </ImageBackground>
      </LinearGradient>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  appContainerStyle: {
    flex: 1,
  },
  keyboardView: {
    flex: 1,
  },
  mainView: {
    flex: 1,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    maxHeight: '100%',
  },
  backgroundImage: {
    opacity: 0.25,
  },
});
