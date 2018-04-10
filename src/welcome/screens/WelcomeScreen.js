import React, { Component } from 'react'
import { View, Text, Image, ImageBackground, Button } from 'react-native'
import type { NavigationScreenProp } from 'react-navigation/src/TypeDefinition'
import Swiper from 'react-native-swiper'

import Screen from '../../ui/components/Screen'

import logo from '../../../assets/icon.png'

type Props = {
    navigation: NavigationScreenProp<*, *>,
}

class WelcomeScreen extends Component<Props> {
    static navigationOptions = {
        header: null
    }

    onButtonPress() {
        this.props.navigation.navigate('SignUp')
    }

    render() {
        const {
            container,
            inner,
            wrapper,
            slide,
            slide4,
            text,
            button,
            image,
            buttonStyle
        } = styles

        return (
            <ImageBackground source={logo} style={container}>
                <View style={inner}>
                    <Swiper style={wrapper} showsButtons={true} loop={false}>
                        <View style={slide}>
                            <Image source={logo} style={image} />
                            <Text style={text}>Create a League</Text>
                            <View style={buttonStyle}></View>
                        </View>
                        <View style={slide}>
                            <Image source={logo} style={image} />
                            <Text style={text}>Invite your friends</Text>
                            <View style={buttonStyle}></View>
                        </View>
                        <View style={slide}>
                            <Image source={logo} style={image} />
                            <Text style={text}>Duel</Text>
                            <View style={buttonStyle}></View>
                        </View>
                        <View style={slide4}>
                            <Image source={logo} style={image} />
                            <Text style={text}>Win cash</Text>
                            <View style={buttonStyle}>
                                <Button style={button} color="#841584" title="Play Now" onPress={this.onButtonPress}></Button>
                            </View>
                        </View>
                    </Swiper>
                </View>
            </ImageBackground>
        )
    }
}

const styles = {
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    inner: {
        width: '80%',
        height: '80%',
        backgroundColor: 'rgba(255, 255, 255, .1)'
    },
    wrapper: {

    },
    slide: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0)',
    },
    slide4: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0)',
    },
    text: {
        flex: 1,
        color: 'red',
        fontSize: 30,
        fontWeight: 'bold',
    },
    image: {
        flex: 2,
        height: '100%',
        width: '100%'
    },
    buttonStyle: {
        flex: 1,
        // marginTop: 100
    },
}

export default WelcomeScreen



