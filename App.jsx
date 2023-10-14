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

const thisPlatform = Platform.OS;

console.log(thisPlatform, Platform.Version);

export default function App() {
  const [fontsLoaded] = useFonts({
    interblack: require('./assets/fonts/Inter-Black.otf'),
    interlight: require('./assets/fonts/Inter-Light.otf'),
    interregular: require('./assets/fonts/Inter-Regular.otf'),
  });

  return (
    <LinearGradient
      colors={['#33456b', '#3b5998', '#122453']}
      style={styles.appContainerStyle}
    >
      <ImageBackground
        source={require('./assets/img/uhcw-main3.png')}
        resizeMode='cover'
        style={styles.appContainerStyle}
        imageStyle={styles.backgroundImage}
      >
        <KeyboardAvoidingView
          style={styles.keyboardView}
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        >
          <SafeAreaView style={styles.mainView}>
            <View style={styles.container}>
              <Welcome message='UHCW Locations' platform={thisPlatform} />
              <StatusBar style='light' />
            </View>
          </SafeAreaView>
        </KeyboardAvoidingView>
      </ImageBackground>
    </LinearGradient>
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
    width: '100%',
  },
  backgroundImage: {
    opacity: 0.25,
  },
});
