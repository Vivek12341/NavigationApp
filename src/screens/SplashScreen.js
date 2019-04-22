

import React, { Component } from 'react';
import { StyleSheet, Text, Image, View, ImageBackground } from 'react-native';
import { Navigation } from "react-native-navigation";

import { goLogin, goHome } from '../bottomtabs'

export default class SplashScreen extends Component {

  async componentDidMount() {
    
   setTimeout(() => {

          //  alert('Hello')
       
            // try {
                  // const user = await AsyncStorage.getItem("isLoggedIn")
                  // console.log('user: ', user)
                  // if (user) {
                  //   goHome()
                  // } else if (user == null) {
                      goLogin()
                //   } else {
                //     goLogin()
                //   }
                // } catch (err) {
                //   console.log('error: ', err)
                //   goLogin()
                // }
          
          

   }, 2 * 1000);

    }

  render() {

    return (

      <View style={styles.container}>

        <ImageBackground style={styles.picture} source={require('../../assets/images/splash.jpg')} />

      </View>
    );
  }
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  picture: {
    width: '100%',
    height: '100%',
    flex: 1

  }

});