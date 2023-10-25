import React, { Component } from 'react';
import { Text, View } from 'react-native';
import firebase from 'firebase';

export default class Logout extends Component{
    componentDidMount(){
        firebase.auth().signOut();//Disconecta o usuario do BD
        this.props.navigation.replace("Login");//Levado para a tela de Login
    }
  render(){
    return(
      <View 
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center'
        }}>
        <Text> Logout </Text>
      </View>
    )
  }
}