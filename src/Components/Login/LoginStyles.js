import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
    base: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    },
    linearGradient: {
      flex: 1,
      paddingLeft: 15,
      paddingRight: 15,
      // borderRadius: 10
    },
    buttonText: {
      fontSize: 18,
      fontFamily: 'Gill Sans',
      textAlign: 'center',
      margin: 10,
      color: '#ffffff',
      backgroundColor: 'transparent',
    },
    logo: {
      height: 100,
      width: 175,
      marginTop: 80,
      alignSelf: "center"
    },
    userinput: {
      alignSelf: "center",
      fontSize: 30,
      borderRadius: 20,
      borderWidth: 1,
      borderColor: 'red',
      width: 250,
      height: 55,
      textAlign: 'center',
      justifyContent: 'center',
      backgroundColor: 'white'
    },
    pwdinput: {
      alignSelf: "center",
      fontSize: 30,
      marginTop: 20,
      borderRadius: 20,
      borderWidth: 1,
      borderColor: 'red',
      width: 250,
      height: 55,
      textAlign: 'center',
      justifyContent: 'center',
      backgroundColor: 'white'
    },
  });
  export default styles;