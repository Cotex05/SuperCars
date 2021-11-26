import { StyleSheet } from 'react-native';

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
    headTitle: {
        color: '#fff',
        padding: 7,
        fontFamily: 'serif',
        fontSize: 32,
        fontWeight: 'bold',
        textShadowColor: 'limegreen',
        textShadowRadius: 50,
        letterSpacing: 2
    },
    mainBg: {
        width: '100%',
        height: "100%",
    },
    logoView: {
        backgroundColor: 'rgba(0,0,0,0.4)',
        marginVertical: 10,
        paddingVertical: 20,
        borderRadius: 50
    },
    logo: {
        height: 150,
        width: 150,
        resizeMode: 'contain',
        justifyContent: 'center',
        alignSelf: 'flex-start',
        borderRadius: 20,
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

export default HomeStyle;