import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ImageBackground, ScrollView, Dimensions } from 'react-native';
import { Button, Icon } from 'react-native-elements';

// Navigation
import { createStackNavigator } from '@react-navigation/stack';

// Components
import CarListView from '../items/CarListView';
import Car0 from '../items/AstonMartin/Car0';
import Car1 from '../items/AstonMartin/Car1';
import Car2 from '../items/AstonMartin/Car2';
import Car3 from '../items/AstonMartin/Car3';
import Car4 from '../items/AstonMartin/Car4';

// Animations
import * as Animatable from 'react-native-animatable';

// Dimensions
const windowWidth = Dimensions.get('window').width;

const arr = {
    'cars': [{
        'name': 'DB11',
        'img': 'https://i.ibb.co/HB8Jrkh/DB11.png',
        'ncap': 5,
        'price': '$208,425 - $248,725',
        'hp': 630,
        'topSpeed': 335,
        'transmission': 8,
        'displacement': '5204cc',
    },
    {
        'name': 'DBS Superleggera',
        'img': 'https://i.ibb.co/whHLZLL/DBS-Superleggera.png',
        'ncap': 4.5,
        'price': '$314,186 - $337,525',
        'hp': 715,
        'topSpeed': 340,
        'transmission': 8,
        'displacement': '5204cc',
    },
    {
        'name': 'DBX',
        'img': 'https://i.ibb.co/6Pc5j6t/DBX.png',
        'ncap': 5,
        'price': '$179,986 - $195,586',
        'hp': 542,
        'topSpeed': 292,
        'transmission': 9,
        'displacement': '3982cc',
    },
    {
        'name': 'Vanquish 2019',
        'img': 'https://i.ibb.co/3rg4Hmy/Vanquish.png',
        'ncap': 4.5,
        'price': '$296,475 - $314,475',
        'hp': 580,
        'topSpeed': 306,
        'transmission': 8,
        'displacement': '5900cc',
    },
    {
        'name': 'Vantage',
        'img': 'https://i.ibb.co/2K41F0j/Vantage.png',
        'ncap': 4,
        'price': '$156,081 - $183,081',
        'hp': 503,
        'topSpeed': 306,
        'transmission': 8,
        'displacement': '3982cc',
    },
    ]
}

function AstonMartinList({ navigation }) {

    return (
        <View style={HomeStyle.container}>
            <ImageBackground style={HomeStyle.mainBg} source={require('../../assets/images/bg.jpg')} >
                <View style={HomeStyle.headerView}>
                    <View style={{ justifyContent: 'center', alignSelf: 'center' }}>
                        <Button
                            onPress={(() => navigation.goBack())}
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
                    <Animatable.Image animation="zoomIn" easing="ease" useNativeDriver={true} delay={1000} duration={1000} iterationCount={1} style={HomeStyle.logoTop} source={require('../../assets/images/AstonMartin_Logo.png')} />
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
                                btnPress={() => navigation.navigate('Car' + index)}
                            />
                        )
                    })}
                </ScrollView>
            </ImageBackground>
            <StatusBar style="auto" />
        </View>
    );
}



const Stack = createStackNavigator();

function AstonMartin() {
    return (
        <Stack.Navigator headerMode="none">
            <Stack.Screen name="AstonMartinList" component={AstonMartinList} />
            <Stack.Screen name="Car0" component={Car0} />
            <Stack.Screen name="Car1" component={Car1} />
            <Stack.Screen name="Car2" component={Car2} />
            <Stack.Screen name="Car3" component={Car3} />
            <Stack.Screen name="Car4" component={Car4} />
        </Stack.Navigator>
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

export default AstonMartin;