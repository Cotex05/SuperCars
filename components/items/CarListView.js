import React, { useState } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Button, Icon } from 'react-native-elements';
import { Rating } from 'react-native-elements';

// Animations
import * as Animatable from 'react-native-animatable';

const CarListView = (props) => {

    const [animationType, setAnimationType] = useState("slideInRight");

    return (
        <View style={HomeStyle.CarListView}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <Text style={{ color: '#fff', fontFamily: 'serif', fontSize: 30, padding: 10 }}>{props.carName}</Text>
                <View style={{ margin: 12 }}>
                    <Button onPress={props.btnPress} type="outline" title='View' />
                </View>
            </View>
            <View>
                <Animatable.Image onLoad={() => {setAnimationType("slideInRight")}} animation={animationType} useNativeDriver={true} easing="linear" delay={10} duration={2000} iterationCount={1} style={HomeStyle.carImg} source={props.carImage} />
                <View style={{ padding: 10, width: "50%", alignSelf: 'flex-start', position: 'absolute', top: -20 }}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', backgroundColor: '#fff', padding: 10, borderRadius: 20, alignItems: 'center' }}>
                        <Image style={{ height: 25, width: 80, resizeMode: 'contain' }} source={require("../../assets/images/NCAP.png")} />
                        <Rating readonly imageSize={15} startingValue={props.rating} />
                    </View>
                </View>
            </View>
            <View style={HomeStyle.descView}>
                <Text style={HomeStyle.priceRange}>Price Range: {props.price}</Text>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', borderRadius: 20, backgroundColor: 'rgba(0,0,0,0.7)' }}>
                <Animatable.View animation="flipInX" easing="ease" delay={2000} duration={1000} iterationCount={1} style={HomeStyle.specView}>
                    <Icon color='#fff' name='engine' type='material-community' />
                    <Text style={HomeStyle.specText}>{props.hp} HP</Text>
                </Animatable.View>
                <Animatable.View animation="flipInX" easing="ease" delay={2200} duration={1000} iterationCount={1} style={HomeStyle.specView}>
                    <Icon color='#fff' name='speed' type='materialicon' />
                    <Text style={HomeStyle.specText}>{props.topSpeed} Kmph</Text>
                </Animatable.View>
                <Animatable.View animation="flipInX" easing="ease" delay={2400} duration={1000} iterationCount={1} style={HomeStyle.specView}>
                    <Icon color='#fff' name='gears' type='font-awesome' />
                    <Text style={HomeStyle.specText}>{props.transmission}-speed</Text>
                </Animatable.View>
                <Animatable.View animation="flipInX" easing="ease" delay={2600} duration={1000} iterationCount={1} style={HomeStyle.specView}>
                    <Icon color='#fff' name='car-sport-sharp' type='ionicon' />
                    <Text style={HomeStyle.specText}>{props.cc}</Text>
                </Animatable.View>
            </View>
        </View>
    )
}

const HomeStyle = StyleSheet.create({
    CarListView: {
        backgroundColor: 'rgba(0,0,0,0.5)',
        marginVertical: 12,
        marginHorizontal: 10,
        borderRadius: 20,
        borderColor: '#000',
        borderWidth: 3
    },
    carImg: {
        height: 150,
        width: '100%',
        resizeMode: 'contain',
        marginTop: 30
    },
    descView: {
        backgroundColor: 'rgba(0,0,0,0.5)',
    },
    priceRange: {
        color: '#fff',
        fontFamily: 'serif',
        fontSize: 16,
        fontWeight: 'bold',
        marginHorizontal: 15,
        marginVertical: 10
    },
    specView: {
        flexDirection: 'column',
        justifyContent: 'center',
        margin: 8,
        backgroundColor: 'rgba(0,0,0,0)',
        padding: 10,
        borderRadius: 8,
    },
    specText: {
        color: '#fff',
        fontFamily: 'monospace',
        fontWeight: 'bold',
        fontSize: 12
    }
});

export default CarListView;