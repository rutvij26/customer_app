import React, {FC, useContext, useState, useEffect} from 'react';

import {View, Text, StyleSheet, TextInput, Button} from 'react-native';

interface Props {
  handleSubmit;
}

const Login: FC<Props> = ({handleSubmit}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  return (
    <View style={styles.container}>
      <Text style={styles.inContainer}>LOGIN</Text>

      <TextInput
        style={styles.inputField}
        onChangeText={(name) => setName(name)}
        placeholder="name"></TextInput>
      <TextInput
        style={styles.inputField}
        onChangeText={(email) => setEmail(email)}
        placeholder="email"></TextInput>
      <Button
        onPress={() => {
          handleSubmit(name, email);
        }}
        title="Login"></Button>
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
