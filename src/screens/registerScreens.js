import {Navigation} from 'react-native-navigation';

export function registerScreens() {
     Navigation.registerComponent('SplashScreen', () => require('./SplashScreen').default);
//   Navigation.registerComponent('Initializing', (sc) => require('./Initializing').default);
  Navigation.registerComponent('LoginScreen', () => require('./LoginScreen').default);
  Navigation.registerComponent('SignUpScreen', () => require('./SignUpScreen').default);
//   Navigation.registerComponent('Screen2', () => require('./Screen2').default);
}