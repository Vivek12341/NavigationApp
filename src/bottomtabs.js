import { Navigation } from 'react-native-navigation'

export const goLogin = () => Navigation.setRoot({
  root: {
    stack: {
      id: 'App',
      options: {
        topBar: {
          visible: false,
          animate: false,
          drawBehind: true,
        }
      },
      children: [
        {
          component: {
            name: 'LoginScreen',
           
          }
        }
      ],
    }
  }
})
export const goHome = () => Navigation.setRoot({
  root: {
    stack: {
      id: 'App',
      options: {
        topBar: {
          visible: false,
          animate: false,
          drawBehind: true,
        }
      },
      children: [
        {
          component: {
            name: 'SignUpScreen',
            
          }
        }
      ],
    }
  }
})