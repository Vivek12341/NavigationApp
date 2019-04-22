

import { createStackNavigator, createAppContainer } from "react-navigation";

import SplashScreen from "../screens/SplashScreen";
import LoginScreen from "../screens/LoginScreen";
import SignUpScreen from "../screens/SignUpScreen";
import ForgotPassword from "../screens/ForgotPassword";


const AppNavigator = createStackNavigator({

    Splash: {
        screen: SplashScreen,
        headerMode: 'none',
        header: null,
        navigationOptions: {
            header: null
        }
    },
    Login: {
        screen: LoginScreen, headerMode: 'none',
        header: null,
        navigationOptions: {
            header: null
        }
    },

    SignUpScreen: {
        screen: SignUpScreen, headerMode: 'none',
        header: null,
        navigationOptions: {
            header: null
        }
    },


    ForgotPassword: {
        screen: ForgotPassword, headerMode: 'none',
        header: null,
        navigationOptions: {
            header: null
        }
    },

    

        });

export default createAppContainer(AppNavigator);