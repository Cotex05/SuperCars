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
            'name': 'Vanquish 2019',
            'img': 'https://i.ibb.co/3rg4Hmy/Vanquish.png',
            'ncap': 4.5,
            'price': '$296,475 - $314,475',
            'hp': 580,
            'topSpeed': 306,
            'transmission': 8,
            'displacement': '5900cc',
            'link': 'https://www.caranddriver.com/aston-martin/vanquish/specs/2019/aston-martin_vanquish_aston-martin-vanquish-volante_2019/404643'
        },
    ]
}

const images = {
    "Exterior": [
        { "uri": "https://i.ibb.co/ZMBSNNW/Exterior-1.jpg" },
        { "uri": "https://i.ibb.co/yyd4VKs/Exterior-2.jpg" },
        { "uri": "https://i.ibb.co/Cb3rSqq/Exterior-3.jpg" },
        { "uri": "https://i.ibb.co/WFxmLTM/Exterior-4.png" },
        { "uri": "https://i.ibb.co/Wc0Yt7T/Exterior-5.jpg" },
        { "uri": "https://i.ibb.co/1RYLHN9/Exterior-6.jpg" },
    ],
    "Interior": [
        { "uri": "https://i.ibb.co/q92LZV4/Interior-1.jpg" },
        { "uri": "https://i.ibb.co/28RTQ4b/Interior-2.jpg" },
        { "uri": "https://i.ibb.co/3rGDn5w/Interior-3.jpg" },
        { "uri": "https://i.ibb.co/nMVr1SL/Interior-4.jpg" },
        { "uri": "https://i.ibb.co/VMZCcrX/Interior-5.jpg" },
        { "uri": "https://i.ibb.co/wM6CXW9/Interior-6.jpg" },
    ],
}

const specifications = {
    "specs": [
        {
            'type': 'Price Range',
            'desc': '$296,475 - $314,475'
        },
        {
            'type': 'Model Variants',
            'desc': ' Vanquish S Coupe\n Vanquish S Volante Coupe'
        },
        {
            'type': 'Vehicle Type',
            'desc': 'Front-Engine, Rear-Wheel-Drive, 2+2 Passenger, 2-Door Coupe'
        },
        {
            'type': 'Engine Type',
            'desc': 'Premium Unleaded V-12, MPI Fuel System'
        },
        {
            'type': 'Displacement',
            'desc': '5900 cc'
        },
        {
            'type': 'Power',
            'desc': '580 hp @ 7000 rpm'
        },
        {
            'type': 'Torque',
            'desc': '465 lb-ft @ 5500 rpm'
        },
        {
            'type': 'Range',
            'desc': ' City: 431 km\n Highway: 696 km'
        },
        {
            'type': 'Transmission',
            'desc': '8-speed Automatic'
        },
        {
            'type': 'Dimensions',
            'desc': ' Wheelbase: 107.9 in\n Length: 186.2 in\n Width: 75.2 in\n Height: 51 in'
        },
        {
            'type': 'Performance (C/D EST)',
            'desc': ' 100 kmph: 3.5 sec\n 160 kmph: 7.3 sec\n 400-meter: 12.6 sec\n Top speed: 306 kmph'
        },
        {
            'type': 'EPA FUEL ECONOMY',
            'desc': ' City: 5.53 km/L\n Highway: 8.93 km/L'
        },
        {
            'type': 'Fuel Tank Capacity',
            'desc': '77 Litres'
        },
        {
            'type': 'Vehicle Curb Weight',
            'desc': '1843 kg'
        }
    ]
}

const Car3 = ({ navigation }) => {

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
            require('../../../assets/audio/cars/AstonMartin/Vanquish_Engine.mp3')
        );
        setSound(sound);

        Vibration.vibrate();
        console.log('Playing Sound');
        await sound.playAsync();
    }

    async function playAccelerationSound() {

        console.log('Loading Sound');
        const { sound } = await Audio.Sound.createAsync(
            require('../../../assets/audio/cars/AstonMartin/Vanquish_Acceleration.mp3')
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

export default Car3;