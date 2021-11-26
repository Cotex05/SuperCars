import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, View, ImageBackground, Image, ScrollView, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// Animations
import * as Animatable from 'react-native-animatable';

// Styles
import HomeStyle from './styles/HomeStyle';

// Components
import AlfaRomeo from './components/Brands/AlfaRomeo';
import AstonMartin from './components/Brands/AstonMartin';
import Audi from './components/Brands/Audi';
import Bentley from './components/Brands/Bentley';
import BMW from './components/Brands/BMW';
import Bugatti from './components/Brands/Bugatti';
import Ferrari from './components/Brands/Ferrari';
import Jaguar from './components/Brands/Jaguar';
import Koenigsegg from './components/Brands/Koenigsegg';
import Lamborghini from './components/Brands/Lamborghini';
import Maserati from './components/Brands/Maserati';
import McLaren from './components/Brands/McLaren';
import MercedesBenz from './components/Brands/MercedesBenz';
import Pagani from './components/Brands/Pagani';
import Porsche from './components/Brands/Porsche';
import RollsRoyce from './components/Brands/RollsRoyce';

function Home({ navigation }) {
  return (
    <View style={HomeStyle.container}>
      <ImageBackground style={HomeStyle.mainBg} source={require('./assets/images/bg.png')} >
        <View style={HomeStyle.headerView}>
          <Text style={HomeStyle.headTitle}>SuperCars Brands</Text>
        </View>
        <ScrollView>
          <View style={HomeStyle.logoView}>
            <View style={{ justifyContent: 'space-around', flexDirection: 'row' }}>
              <TouchableOpacity onPress={() => navigation.navigate('AlfaRomeo')}>
                <Animatable.Image animation="zoomIn" easing="ease" duration={2000} useNativeDriver={true} delay={1000} iterationCount={1} style={HomeStyle.logo} source={require('./assets/images/AlfaRomeo_Logo.png')} />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => navigation.navigate('AstonMartin')} >
                <Animatable.Image animation="zoomIn" easing="ease" duration={2000} useNativeDriver={true} delay={1000} iterationCount={1} style={HomeStyle.logo} source={require('./assets/images/AstonMartin_Logo.png')} />
              </TouchableOpacity>
            </View>
          </View>
          <View style={HomeStyle.logoView}>
            <View style={{ justifyContent: 'space-around', flexDirection: 'row' }}>
              <TouchableOpacity onPress={() => navigation.navigate('Audi')} >
                <Animatable.Image animation="zoomIn" easing="ease" duration={2000} useNativeDriver={true} delay={1000} iterationCount={1} style={HomeStyle.logo} source={require('./assets/images/Audi_Logo.png')} />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => navigation.navigate('Bentley')} >
                <Animatable.Image animation="zoomIn" easing="ease" duration={2000} useNativeDriver={true} delay={1000} iterationCount={1} style={HomeStyle.logo} source={require('./assets/images/Bentley_Logo.png')} />
              </TouchableOpacity>
            </View>
          </View>
          <View style={HomeStyle.logoView}>
            <View style={{ justifyContent: 'space-around', flexDirection: 'row' }}>
              <TouchableOpacity onPress={() => navigation.navigate('BMW')} >
                <Animatable.Image animation="zoomIn" easing="ease" duration={2000} useNativeDriver={true} delay={1000} iterationCount={1} style={HomeStyle.logo} source={require('./assets/images/BMW_Logo.png')} />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => navigation.navigate('Bugatti')} >
                <Animatable.Image animation="zoomIn" easing="ease" duration={2000} useNativeDriver={true} delay={1000} iterationCount={1} style={HomeStyle.logo} source={require('./assets/images/Bugatti_Logo.png')} />
              </TouchableOpacity>
            </View>
          </View>
          <View style={HomeStyle.logoView}>
            <View style={{ justifyContent: 'space-around', flexDirection: 'row' }}>
              <TouchableOpacity onPress={() => navigation.navigate('Ferrari')} >
                <Animatable.Image animation="zoomIn" easing="ease" duration={2000} useNativeDriver={true} delay={1000} iterationCount={1} style={HomeStyle.logo} source={require('./assets/images/Ferrari_Logo.png')} />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => navigation.navigate('Jaguar')} >
                <Animatable.Image animation="zoomIn" easing="ease" duration={2000} useNativeDriver={true} delay={1000} iterationCount={1} style={HomeStyle.logo} source={require('./assets/images/Jaguar_Logo.png')} />
              </TouchableOpacity>
            </View>
          </View>
          <View style={HomeStyle.logoView}>
            <View style={{ justifyContent: 'space-around', flexDirection: 'row' }}>
              <TouchableOpacity onPress={() => navigation.navigate('Koenigsegg')} >
                <Animatable.Image animation="zoomIn" easing="ease" duration={2000} useNativeDriver={true} delay={1000} iterationCount={1} style={HomeStyle.logo} source={require('./assets/images/Koenigsegg_Logo.png')} />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => navigation.navigate('Lamborghini')} >
                <Animatable.Image animation="zoomIn" easing="ease" duration={2000} useNativeDriver={true} delay={1000} iterationCount={1} style={HomeStyle.logo} source={require('./assets/images/Lamborghini_Logo.png')} />
              </TouchableOpacity>
            </View>
          </View>
          <View style={HomeStyle.logoView}>
            <View style={{ justifyContent: 'space-around', flexDirection: 'row' }}>
              <TouchableOpacity onPress={() => navigation.navigate('Maserati')} >
                <Animatable.Image animation="zoomIn" easing="ease" duration={2000} useNativeDriver={true} delay={1000} iterationCount={1} style={HomeStyle.logo} source={require('./assets/images/Maserati_Logo.png')} />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => navigation.navigate('McLaren')} >
                <Animatable.Image animation="zoomIn" easing="ease" duration={2000} useNativeDriver={true} delay={1000} iterationCount={1} style={HomeStyle.logo} source={require('./assets/images/McLaren_Logo.png')} />
              </TouchableOpacity>
            </View>
          </View>
          <View style={HomeStyle.logoView}>
            <View style={{ justifyContent: 'space-around', flexDirection: 'row' }}>
              <TouchableOpacity onPress={() => navigation.navigate('MercedesBenz')} >
                <Animatable.Image animation="zoomIn" easing="ease" duration={2000} useNativeDriver={true} delay={1000} iterationCount={1} style={HomeStyle.logo} source={require('./assets/images/MercedesBenz_Logo.png')} />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => navigation.navigate('Pagani')} >
                <Animatable.Image animation="zoomIn" easing="ease" duration={2000} useNativeDriver={true} delay={1000} iterationCount={1} style={HomeStyle.logo} source={require('./assets/images/Pagani_Logo.png')} />
              </TouchableOpacity>
            </View>
          </View>
          <View style={HomeStyle.logoView}>
            <View style={{ justifyContent: 'space-around', flexDirection: 'row' }}>
              <TouchableOpacity onPress={() => navigation.navigate('Porsche')} >
                <Animatable.Image animation="zoomIn" easing="ease" duration={2000} useNativeDriver={true} delay={1000} iterationCount={1} style={HomeStyle.logo} source={require('./assets/images/Porsche_Logo.png')} />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => navigation.navigate('RollsRoyce')} >
                <Animatable.Image animation="zoomIn" easing="ease" duration={2000} useNativeDriver={true} delay={1000} iterationCount={1} style={HomeStyle.logo} source={require('./assets/images/RollsRoyce_Logo.png')} />
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </ImageBackground>
      <StatusBar style="auto" />
    </View>
  );
}

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" headerMode="none">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="AlfaRomeo" component={AlfaRomeo} />
        <Stack.Screen name="AstonMartin" component={AstonMartin} />
        <Stack.Screen name="Audi" component={Audi} />
        <Stack.Screen name="Bentley" component={Bentley} />
        <Stack.Screen name="BMW" component={BMW} />
        <Stack.Screen name="Bugatti" component={Bugatti} />
        <Stack.Screen name="Ferrari" component={Ferrari} />
        <Stack.Screen name="Jaguar" component={Jaguar} />
        <Stack.Screen name="Koenigsegg" component={Koenigsegg} />
        <Stack.Screen name="Lamborghini" component={Lamborghini} />
        <Stack.Screen name="Maserati" component={Maserati} />
        <Stack.Screen name="McLaren" component={McLaren} />
        <Stack.Screen name="MercedesBenz" component={MercedesBenz} />
        <Stack.Screen name="Pagani" component={Pagani} />
        <Stack.Screen name="Porsche" component={Porsche} />
        <Stack.Screen name="RollsRoyce" component={RollsRoyce} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;