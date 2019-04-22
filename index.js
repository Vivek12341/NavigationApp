/**
 * @format
 */

import { Navigation } from "react-native-navigation";

import {registerScreens} from './src/screens/registerScreens';

registerScreens();

Navigation.events().registerAppLaunchedListener(() => {
  Navigation.setRoot({
    root: {
      component: { 
        name: 'SplashScreen'
      }
    },
  });
});