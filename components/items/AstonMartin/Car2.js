import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, ScrollView, Image, Dimensions, TouchableOpacity, Modal, Pressable, Vibration, Linking } from 'react-native';
import { Button, Icon, Divider } from 'react-native-elements';

// API
import { Audio } from 'expo-av';

// Animations
import * as Animatable from 'react-native-animatable';

// Dimensions
const windowWidth = Dimensions.get('window').width;

// Data Object
const arr = {
    'cars': [
        {
            'name': 'DBX',
            'img': 'https://i.ibb.co/6Pc5j6t/DBX.png',
            'ncap': 5,
            'price': '$179,986 - $195,586',
            'hp': 542,
            'topSpeed': 292,
            'transmission': 9,
            'displacement': '3982cc',
            'link': 'https://www.caranddriver.com/aston-martin/dbx/specs'
        },
    ]
}

const images = {
    "Exterior": [
        { "uri": "https://i.ibb.co/2t60MMx/Exterior-1.jpg" },
        { "uri": "https://i.ibb.co/hgSyWQH/Exterior-2.png" },
        { "uri": "https://i.ibb.co/khkgLkh/Exterior-3.jpg" },
        { "uri": "https://i.ibb.co/N63wt8v/Exterior-4.jpg" },
        { "uri": "https://i.ibb.co/WKtZ6vC/Exterior-5.jpg" },
        { "uri": "https://i.ibb.co/6w7rfTj/Exterior-6.jpg" },
    ],
    "Interior": [
        { "uri": "https://i.ibb.co/vV8VqP6/Interior-1.jpg" },
        { "uri": "https://i.ibb.co/jTSLTx5/Interior-2.jpg" },
        { "uri": "https://i.ibb.co/WspLsLx/Interior-3.jpg" },
        { "uri": "https://i.ibb.co/R70xDCh/Interior-4.jpg" },
        { "uri": "https://i.ibb.co/hXnq9qg/Interior-5.jpg" },
        { "uri": "https://i.ibb.co/g3mfs7j/Interior-6.jpg" },
    ],
}

const specifications = {
    "specs": [
        {
            'type': 'Price Range',
            'desc': '$179,986 - $195,586'
        },
        {
            'type': 'Model Variants',
            'desc': ' DBX AWD'
        },
        {
            'type': 'Vehicle Type',
            'desc': 'Front-Engine, All-Wheel-Drive, 2+3 Passenger, 4-Door Wagon'
        },
        {
            'type': 'Engine Type',
            'desc': 'Twin-turbocharged and Intercooled V-8, Aluminum block and heads, Direct fuel injection'
        },
        {
            'type': 'Displacement',
            'desc': '3982 cc'
        },
        {
            'type': 'Power',
            'desc': '542 hp @ 6000 rpm'
        },
        {
            'type': 'Torque',
            'desc': '516 lb-ft @ 2000 rpm'
        },
        {
            'type': 'Range',
            'desc': ' City: 507 km\n Highway: 652 km'
        },
        {
            'type': 'Transmission',
            'desc': '9-speed Automatic'
        },
        {
            'type': 'Dimensions',
            'desc': ' Wheelbase: 120.5 in\n Length: 198.4 in\n Width: 78.7 in\n Height: 66.1 in'
        },
        {
            'type': 'Performance (C/D EST)',
            'desc': ' 100 kmph: 3.9 sec\n 160 kmph: 9.5 sec\n 400-meter: 12.4 sec\n Top speed: 292 kmph'
        },
        {
            'type': 'EPA FUEL ECONOMY',
            'desc': ' City: 5.95 km/L\n Highway: 7.65 km/L'
        },
        {
            'type': 'Fuel Tank Capacity',
            'desc': '85 Litres'
        },
        {
            'type': 'Vehicle Curb Weight',
            'desc': '2326 kg'
        }
    ]
}

const Car2 = ({ navigation }) => {

    const [exterior, setExterior] = useState('flex');
    const [interior, setInterior] = useState('none');
    const [video, setvideo] = useState('none');

    const [ModalVisible, setModalVisible] = useState(false);

    const [sound, setSound] = useState();

    const handleInteriorGallery = () => {
        setExterior('none');
        setInterior('flex');
        setvideo('none');
    }

    const handleExteriorGallery = () => {
        setExterior('flex');
        setInterior('none');
        setvideo('none');
    }

    const handleVideoGallery = () => {
        setExterior('none');
        setInterior('none');
        setvideo('flex');
    }

    async function playHornSound() {
        console.log('Loading Sound');
        const { sound } = await Audio.Sound.createAsync(
            require('../../../assets/audio/cars/AstonMartin/DB11-horn.mp3')
        );
        setSound(sound);

        console.log('Playing Sound');
        await sound.playAsync();
    }

    async function playEngineSound() {
        console.log('Loading Sound');
        const { sound } = await Audio.Sound.createAsync(
            require('../../../assets/audio/cars/AstonMartin/DBX_Engine.mp3')
        );
        setSound(sound);

        Vibration.vibrate();
        console.log('Playing Sound');
        await sound.playAsync();
    }

    async function playAccelerationSound() {

        console.log('Loading Sound');
        const { sound } = await Audio.Sound.createAsync(
            require('../../../assets/audio/cars/AstonMartin/DBX_Acceleration.mp3')
        );
        setSound(sound);

        console.log('Playing Sound');
        await sound.playAsync();
    }

    useEffect(() => {
        return sound
            ? () => {
                console.log('Unloading Sound');
                sound.unloadAsync();
            }
            : undefined;
    }, [sound]);

    return (
        <View style={HomeStyle.container}>
            <ScrollView>
                <View style={HomeStyle.headerViewInner}>
                    <View style={{ justifyContent: 'space-evenly', alignSelf: 'center' }}>
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
                    <View style={{ flexDirection: 'row' }}>
                        <Animatable.Image animation="zoomIn" useNativeDriver={true} easing="ease" delay={200} duration={1000} iterationCount={1} style={HomeStyle.logoTopInner} source={require('../../../assets/images/AstonMartin_Logo.png')} />
                        <Text style={HomeStyle.carNameTitle}>{arr['cars'][0].name}</Text>
                    </View>
                </View>
                <View style={{ display: exterior }}>
                    <View style={HomeStyle.carImagesView}>
                        <ScrollView horizontal pagingEnabled={true} >
                            <Image style={HomeStyle.carImageStyle} source={{ uri: images['Exterior'][0].uri }} />
                            <Image style={HomeStyle.carImageStyle} source={{ uri: images['Exterior'][1].uri }} />
                            <Image style={HomeStyle.carImageStyle} source={{ uri: images['Exterior'][2].uri }} />
                            <Image style={HomeStyle.carImageStyle} source={{ uri: images['Exterior'][3].uri }} />
                            <Image style={HomeStyle.carImageStyle} source={{ uri: images['Exterior'][4].uri }} />
                            <Image style={HomeStyle.carImageStyle} source={{ uri: images['Exterior'][5].uri }} />
                        </ScrollView>
                    </View>
                </View>
                <View style={{ display: interior }}>
                    <View style={HomeStyle.carImagesView}>
                        <ScrollView horizontal pagingEnabled={true} >
                            <Image style={HomeStyle.carImageStyle} source={{ uri: images['Interior'][0].uri }} />
                            <Image style={HomeStyle.carImageStyle} source={{ uri: images['Interior'][1].uri }} />
                            <Image style={HomeStyle.carImageStyle} source={{ uri: images['Interior'][2].uri }} />
                            <Image style={HomeStyle.carImageStyle} source={{ uri: images['Interior'][3].uri }} />
                            <Image style={HomeStyle.carImageStyle} source={{ uri: images['Interior'][4].uri }} />
                            <Image style={HomeStyle.carImageStyle} source={{ uri: images['Interior'][5].uri }} />
                        </ScrollView>
                    </View>
                </View>
                <View style={{ display: video }}>
                    <View style={HomeStyle.carImagesView}>
                    </View>
                </View>
                <View>
                    <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                        <TouchableOpacity onPress={handleExteriorGallery}>
                            <Text style={HomeStyle.ExteriorButton}>Exterior</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={handleInteriorGallery}>
                            <Text style={HomeStyle.InteriorButton}>Interior</Text>
                        </TouchableOpacity>
                        {/* <TouchableOpacity onPress={handleVideoGallery}>
                                    <Text style={HomeStyle.videoButton}>Video</Text>
                                </TouchableOpacity> */}
                    </View>
                </View>
                <View>

                </View>
                <View style={{ borderRadius: 15, marginTop: 10 }}>
                    <Text style={HomeStyle.specs}>Specifications</Text>
                    <View style={HomeStyle.specsView}>
                        <View style={{ backgroundColor: 'rgba(0,0,0,0.88)', borderRadius: 15 }}>
                            {specifications['specs'].map((item, index) => {
                                return (
                                    <View key={index} >
                                        <View style={HomeStyle.specRow}>
                                            <Text style={HomeStyle.SpecsType}>{item.type}</Text>
                                            <Text style={HomeStyle.SpecsDesc}>{item.desc}</Text>
                                        </View>
                                        <Divider orientation="horizontal" width={1} color='grey' />
                                    </View>
                                )
                            })}
                        </View>
                    </View>
                </View>
                <View>
                    <View style={{ fontSize: 20, justifyContent: 'center', alignSelf: 'center', margin: 50 }} >
                        <Button
                            type="clear"
                            icon={
                                <Icon
                                    name="open-outline"
                                    type="ionicon"
                                    size={25}
                                    color="#007fff"
                                />
                            }
                            title=" More Info"
                            onPress={() => { Linking.openURL(arr['cars'][0].link) }}
                        />
                    </View>
                </View>
            </ScrollView>

            <TouchableOpacity onPress={() => setModalVisible(true)} style={{ position: 'absolute', bottom: 10, right: 10 }}>
                <Icon
                    reverse
                    name='car-sport'
                    type='ionicon'
                    color='#007fff'
                />
            </TouchableOpacity>
            <Modal
                animationType="slide"
                transparent={true}
                visible={ModalVisible}
                onRequestClose={() => {
                    setModalVisible(!ModalVisible);
                }}
            >
                <Animatable.View animation="zoomIn" useNativeDriver={true} easing="ease" delay={200} iterationCount={1}>
                    <View style={HomeStyle.modalView}>
                        <View>
                            <View style={{ backgroundColor: 'grey', height: 5, width: 100, borderRadius: 20, justifyContent: 'center', alignSelf: 'center', marginBottom: 20 }}></View>
                        </View>
                        <View style={{ justifyContent: 'space-between', flexDirection: 'row', marginBottom: 20 }}>
                            <Text style={{ color: "#fff", fontSize: 25, paddingStart: 12, fontFamily: 'monospace', fontWeight: 'bold' }}>{arr['cars'][0].name}</Text>
                            <Pressable
                                onPress={() => setModalVisible(!ModalVisible)}
                            >
                                <Icon name="close-circle-outline" type="ionicon" color="white" size={35} />
                            </Pressable>
                        </View>
                        <View style={{ backgroundColor: "#000", borderRadius: 30 }}>
                            <Animatable.Image useNativeDriver={true} animation="fadeInRight" easing="linear" delay={500} duration={1000} style={HomeStyle.carImg} source={{ uri: arr['cars'][0].img }} />
                            <View>
                                <View style={{ flexDirection: 'row', justifyContent: 'space-evenly' }}>
                                    <TouchableOpacity onPress={playHornSound}>
                                        <Icon
                                            reverse
                                            name='bullhorn'
                                            type='font-awesome'
                                            color='#007fff'
                                            size={35}
                                        />
                                    </TouchableOpacity>
                                    <TouchableOpacity onPress={playEngineSound}>
                                        <Icon
                                            reverse
                                            name='engine-outline'
                                            type='material-community'
                                            color='limegreen'
                                            size={35}
                                        />
                                    </TouchableOpacity>
                                </View>
                                <TouchableOpacity onPress={playAccelerationSound} style={{ flexDirection: 'row', justifyContent: 'space-evenly' }}>
                                    <Icon
                                        reverse
                                        name='speedometer'
                                        type='material-community'
                                        color='#ff0050'
                                        size={35}
                                    />
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </Animatable.View>
            </Modal>

        </View>
    )
}



const HomeStyle = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
        marginTop: 25,
    },
    headerViewInner: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        backgroundColor: 'rgba(0,100,255,0.6)',
        borderRadius: 30,
        marginVertical: 10
    },
    logoTopInner: {
        height: 50,
        width: 80,
        resizeMode: 'contain',
        justifyContent: 'center',
        alignSelf: 'flex-start',
        borderRadius: 20,
        margin: 5
    },
    carNameTitle: {
        color: '#fff',
        padding: 7,
        fontFamily: 'serif',
        fontSize: 25,
        fontWeight: 'bold',
        textShadowColor: 'limegreen',
        textShadowRadius: 50,
        justifyContent: 'center',
        alignSelf: 'center'
    },
    carImagesView: {
        marginVertical: 15,
    },
    carImageStyle: {
        aspectRatio: 1.6,
        width: windowWidth,
        resizeMode: 'cover',
        alignSelf: 'center',
        borderColor: '#fff',
        borderWidth: 2
    },
    ExteriorButton: {
        color: '#fff',
        fontSize: 20,
        borderColor: '#fff',
        borderWidth: 2,
        paddingHorizontal: 10,
        borderTopLeftRadius: 18,
        borderBottomLeftRadius: 18
    },
    InteriorButton: {
        color: '#fff',
        fontSize: 20,
        borderColor: '#fff',
        borderWidth: 2,
        paddingHorizontal: 10,
        borderTopRightRadius: 18,
        borderBottomRightRadius: 18
    },
    videoButton: {
        color: '#fff',
        fontSize: 20,
        borderColor: '#fff',
        borderWidth: 2,
        paddingHorizontal: 10,
        borderTopRightRadius: 18,
        borderBottomRightRadius: 18
    },
    modalView: {
        marginTop: 300,
        backgroundColor: "rgba(25,25,25,1)",
        borderTopRightRadius: 30,
        borderTopLeftRadius: 30,
        padding: 15,
        elevation: 5,
    },
    carImg: {
        height: 150,
        width: '100%',
        resizeMode: 'contain',
        marginTop: 30
    },
    specs: {
        color: '#007fff',
        fontFamily: 'serif',
        fontSize: 25,
        fontWeight: 'bold',
        marginHorizontal: 25,
        marginVertical: 8,
        justifyContent: 'center',
        alignSelf: 'flex-start',
        textShadowColor: '#007fff',
        textShadowRadius: 40,
    },
    videoPlayer: {
        width: windowWidth,
        height: 300
    },
    specsView: {
        backgroundColor: '#fff',
        borderRadius: 20,
        borderColor: 'grey',
        borderWidth: 4,
        marginHorizontal: 10,
        marginBottom: 12
    },
    specRow: {
        padding: 10
    },
    SpecsType: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#fff',
    },
    SpecsDesc: {
        color: '#fff',
        fontFamily: 'serif',
        fontSize: 14
    }
});

export default Car2;