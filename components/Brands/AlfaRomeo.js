import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { useNavigation } from '@react-navigation/native';
import { StyleSheet, Text, View, ImageBackground, ScrollView } from 'react-native';
import { Button, Icon } from 'react-native-elements';

// Components
import CarListView from '../items/CarListView';

// Animations
import * as Animatable from 'react-native-animatable';

function AlfaRomeo() {

    const navig = useNavigation();

    const arr = {
        'cars': [{
            'name': '2021 Giulia',
            'img': 'https://i.ibb.co/4Fy7J90/Giulia.png',
            'ncap': 5,
            'price': '$50,455 - $90,945',
            'hp': 280,
            'topSpeed': 240,
            'transmission': 8,
            'displacement': '2000cc',
        },
        {
            'name': '4C Coupe',
            'img': 'https://i.ibb.co/brf8K4R/4C-Coupe.png',
            'ncap': 4,
            'price': '$66,845 - $78,845',
            'hp': 237,
            'topSpeed': 257,
            'transmission': 6,
            'displacement': '1700cc',
        },
        {
            'name': '2021 Stelvio',
            'img': 'https://i.ibb.co/zbnw2nH/Stelvio.png',
            'ncap': 5,
            'price': '$54,545 - $96,200',
            'hp': 290,
            'topSpeed': 232,
            'transmission': 8,
            'displacement': '2000cc',
        },
        ]
    }
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
                                    size={35}
                                    color="#fff"
                                />
                            }
                        />
                    </View>
                    <Animatable.Image animation="fadeInDown" easing="linear" delay={1000} duration={1000} iterationCount={1} style={HomeStyle.logoTop} source={require('../../assets/images/AlfaRomeo_Logo.png')} />
                    <Text style={HomeStyle.LogoTitle}>SuperCars</Text>
                </View>
                <ScrollView>
                    {arr['cars'].map((item, index) => {

                        return (
                            <CarListView
                                key={index}
                                carName={item.name}
                                price={item.price}
                                carImage={{ uri: item.img }}
                                hp={item.hp}
                                topSpeed={item.topSpeed}
                                transmission={item.transmission}
                                cc={item.displacement}
                                rating={item.ncap}
                            />
                        )
                    })}
                </ScrollView>
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
        backgroundColor: 'rgba(0,100,255,0.6)',
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
    },
});

export default AlfaRomeo;