import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import type { NavigationScreenProp } from 'react-navigation/src/TypeDefinition'

import Button from '../../ui/components/Button'
import LinkButton from '../../ui/components/LinkButton'
import Screen from '../../ui/components/Screen'

import RNFirebaseLogo from '../../../assets/wtfLogo.png'

/*
 * We use flow type to validate the Props of the component
 */
type Props = {
  navigation: NavigationScreenProp<*, *>,
}

class Home extends React.Component<Props> {
  static navigationOptions = {
    header: null,
  }

  onLogin = () => {
    // Navigate to the Login screen
    this.props.navigation.navigate('Login')
  }

  onSignUp = () => {
    // Navigate to the SignUp screen
    this.props.navigation.navigate('SignUp')
  }

  render() {
    const { 
      container, 
      image, 
      linkContainer, 
      loginOptions, 
      signUpText, 
      welcome, 
      welcomeText 
    } = styles

    return (
      <Screen>
        <View style={welcome}>
          <Image source={RNFirebaseLogo} style={image} />
          <Text style={welcomeText}>
            Wine, Trivia and Friends!
          </Text>
        </View>
        <View style={loginOptions}>
          <Button
            onPress={this.onLogin}
            text="Login"
          />
          <LinkButton
            containerStyle={linkContainer}
            onPress={this.onSignUp}>
            <Text>Don't have an account yet? <Text style={signUpText}>Sign Up</Text></Text>
          </LinkButton>
        </View>
      </Screen>
    )
  }
}

const styles = {
  container: {
    flex: 1,
  },
  image: {
    height: 250,
    width: 250,
  },
  linkContainer: {
    alignSelf: 'center',
    height: 45,
  },
  loginOptions: {
    padding: 8,
    backgroundColor: '#AD725F'
  },
  signUpText: {
    fontWeight: '700',
  },
  welcome: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
    padding: 24,
    backgroundColor: '#AD725F'
  },
  welcomeText: {
    fontSize: 20,
    marginTop: 24,
    textAlign: 'center',
  },
}

export default Home



