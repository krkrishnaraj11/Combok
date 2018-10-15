import React, { Component } from 'react'
import { View, StyleSheet, Text,TextInput, Image } from 'react-native'
import * as firebase from "firebase";
import { login } from '../../Api/auth'
import styles from './LoginStyles'
import { Button } from 'react-native-elements';
import  {Icon} from 'react-native-vector-icons';
import LinearGradient from 'react-native-linear-gradient';
export default class Login extends Component {
  static navigationOptions = {
    headerStyle: {
      backgroundColor: 'red'
    }
  };
  constructor(props) {
    super(props);
    this.onLogin = this.onLogin.bind(this);
  }

  async onLogin() {
    await login();
    this.props.navigation.navigate('Dashboard');
  }

  render() {
    return (
      <LinearGradient colors={['red','yellow']} style={styles.linearGradient}>
        <Image
          style={styles.logo}
          source={require('../../Assets/logo.png')}
        />
        <TextInput
            keyboardType='email-address'
            style={styles.userinput}
            autoCapitalize={"none"}
            placeholder={"Username"}
            fontSize={23}
            // onChangeText={(num) => this.setState({num})}
            // value={this.state.num}
        />
        <TextInput
            keyboardType='default'
            secureTextEntry={true}
            style={styles.pwdinput}
            fontSize={23}
            autoCapitalize={"none"}
            placeholder={"Password"}
            // onChangeText={(num) => this.setState({num})}
            // value={this.state.num}
        />
        {/* <Icon
          name='sc-telegram'
          type='evilicon'
          color='#517fa4'
        /> */}
      </LinearGradient>
    );
  }
}