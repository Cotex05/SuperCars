import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { useNavigation } from '@react-navigation/native';
import { StyleSheet, Text, View, ImageBackground, Image } from 'react-native';
import { Button, Icon } from 'react-native-elements';

function Pagani() {

    const navig = useNavigation();

    return (
        <View style={HomeStyle.container}>
            <ImageBackground style={HomeStyle.mainBg} source={require('../../assets/images/bg.jpg')} >
                <View style={HomeStyle.headerView}>
                    <View style={{ justifyContent: 'center', alignSelf: 'center' }}>
                        <Button
                            onPress={(() => navig.goBack())}
                            type="clear"
                            icon={
                                <Icon
                                    name="arrow-back"
                                    type="ionicon"
                                    size={25}
                                    color="#fff"
                                />
                            }
                        />
                    </View>
                    <Image style={HomeStyle.logoTop} source={require('../../assets/images/Pagani_Logo.png')} />
                    <Text style={HomeStyle.LogoTitle}>SuperCars</Text>
                </View>
            </ImageBackground>
            <StatusBar style="auto" />
        </View>
    );
}

const HomeStyle = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
        marginTop: 25,
    },
    headerView: {
        flexDirection: 'row',
        justifyContent: 'center',
        backgroundColor: 'rgba(0,100,255,0.4)',
        borderRadius: 30,
        marginTop: 10
    },
    mainBg: {
        width: '100%',
        height: "100%",
    },
    logoTop: {
        height: 80,
        width: 80,
        resizeMode: 'contain',
        justifyContent: 'center',
        alignSelf: 'flex-start',
        borderRadius: 20,
        margin: 5
    },
    LogoTitle: {
        color: '#fff',
        padding: 7,
        fontFamily: 'monospace',
        fontSize: 35,
        fontWeight: 'bold',
        textShadowColor: 'limegreen',
        textShadowRadius: 50,
        letterSpacing: 2,
        justifyContent: 'center',
        alignSelf: 'center'
    }
});

export default Pagani;