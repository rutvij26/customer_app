import React, {FC, useContext, useState, useEffect} from 'react';

import {View, Text, StyleSheet, TextInput, Button} from 'react-native';
import {StackNavigationProp} from '@react-navigation/stack';
import {AuthParamList} from '../AuthParamList';
import {RouteProp} from '@react-navigation/native';

interface Props {
  navigation?: StackNavigationProp<AuthParamList, 'Login'>;
  route?: RouteProp<AuthParamList, 'Login'>;
  users;
}

const Login: FC<Props> = ({navigation, route, users}) => {
  const [name, setName] = useState('');
  const [pass, setPass] = useState('');

  //Login Submit Handler

  const handleSubmit = (name, pass) => {
    let flag = 0;
    users.map((user) => {
      if (user.name === name && user.pass === pass) {
        flag = 1;
      }
    });
    if (flag === 0) {
      alert('Invalid Username and Password');
      return false;
    } else {
      alert('Logged In');
      navigation.navigate('Display');
      return true;
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.inContainer}>LOGIN</Text>
      <Text style={styles.inContainer}>route name:{route.name}</Text>

      <TextInput
        style={styles.inputField}
        onChangeText={(name) => setName(name)}
        placeholder="name"></TextInput>
      <TextInput
        style={styles.inputField}
        onChangeText={(pass) => setPass(pass)}
        secureTextEntry={true}
        placeholder="pass"></TextInput>
      <Button
        onPress={() => {
          handleSubmit(name, pass);
        }}
        title="Login"></Button>
      <Button
        onPress={() => {
          navigation.navigate('Display');
        }}
        title="Jump"></Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  inContainer: {
    alignSelf: 'center',
    margin: 10,
    fontSize: 25,
  },
  inputField: {
    height: 40,
    minWidth: 300,
    borderColor: 'black',
    borderWidth: 1,
    margin: 10,
  },
  button: {
    margin: 10,
  },
});

export default Login;
