import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ImageBackground, ScrollView, Dimensions } from 'react-native';
import { Button, Icon } from 'react-native-elements';

// Navigation
import { createStackNavigator } from '@react-navigation/stack';

// Components
import CarListView from '../items/CarListView';
import Car0 from '../items/Audi/Car0';
import Car1 from '../items/Audi/Car1';
import Car2 from '../items/Audi/Car2';
import Car3 from '../items/Audi/Car3';
import Car4 from '../items/Audi/Car4';
import Car5 from '../items/Audi/Car5';
import Car6 from '../items/Audi/Car6';

// Animations
import * as Animatable from 'react-native-animatable';

// Dimensions
const windowWidth = Dimensions.get('window').width;

const arr = {
    'cars': [
        {
            'name': 'Audi A3',
            'img': 'https://i.ibb.co/4Pmc3mK/A3.png',
            'ncap': 4.5,
            'price': '$34,845 - $40,495',
            'hp': 184,
            'topSpeed': 210,
            'transmission': 7,
            'displacement': '2000cc',
        },
        {
            'name': 'Audi A4',
            'img': 'https://i.ibb.co/7bVKghx/A4.png',
            'ncap': 5,
            'price': '$40,145 - $50,145',
            'hp': 261,
            'topSpeed': 210,
            'transmission': 7,
            'displacement': '2000cc',
        },
        {
            'name': 'Audi A5',
            'img': 'https://i.ibb.co/pZFbT11/A5.png',
            'ncap': 5,
            'price': '$51,445 - $62,195',
            'hp': 261,
            'topSpeed': 235,
            'transmission': 7,
            'displacement': '2000cc',
        },
        {
            'name': 'Audi A6',
            'img': 'https://i.ibb.co/Y2G4DPM/A6.png',
            'ncap': 5,
            'price': '$56,445- $78,340',
            'hp': 335,
            'topSpeed': 250,
            'transmission': 7,
            'displacement': '2995cc',
        },
        {
            'name': 'Audi A7',
            'img': 'https://i.ibb.co/YD9hwNv/A7.png',
            'ncap': 5,
            'price': '$68,995- $84,370',
            'hp': 335,
            'topSpeed': 250,
            'transmission': 7,
            'displacement': '2995cc',
        },
        {
            'name': 'Audi A8',
            'img': 'https://i.ibb.co/xMFvvkP/A8.png',
            'ncap': 5,
            'price': '$84,795- $99,945',
            'hp': 453,
            'topSpeed': 250,
            'transmission': 8,
            'displacement': '4000cc',
        },
        {
            'name': 'RS e-tron GT',
            'img': 'https://i.ibb.co/Rhn4yD3/RS-e-tron-GT.png',
            'ncap': 5,
            'price': '$100,945 - $164,150',
            'hp': 637,
            'topSpeed': 250,
            'transmission': 2,
            'displacement': 'Electric',
        },
    ]
}

function AudiList({ navigation }) {

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
                    <Animatable.Image animation="zoomIn" easing="ease" useNativeDriver={true} delay={1000} duration={1000} iterationCount={1} style={HomeStyle.logoTop} source={require('../../assets/images/Audi_Logo.png')} />
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

function Audi() {
    return (
        <Stack.Navigator headerMode="none">
            <Stack.Screen name="AudiList" component={AudiList} />
            <Stack.Screen name="Car0" component={Car0} />
            <Stack.Screen name="Car1" component={Car1} />
            <Stack.Screen name="Car2" component={Car2} />
            <Stack.Screen name="Car3" component={Car3} />
            <Stack.Screen name="Car4" component={Car4} />
            <Stack.Screen name="Car5" component={Car5} />
            <Stack.Screen name="Car6" component={Car6} />
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

export default Audi;