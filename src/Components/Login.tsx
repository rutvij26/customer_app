import React, {FC, useContext, useState, useEffect} from 'react';

import {View, Text, StyleSheet, TextInput, Button} from 'react-native';

interface Props {}

const Login: FC<Props> = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = async () => {
    const Data = await fetch(`https://jsonplaceholder.typicode.com/users`);

    const Users = await Data.json();

    setUsers(Users);
  };

  const handleSubmit = (name, email) => {
    let flag = 0;
    const hit = users.map((user) => {
      if (user.name === name && user.email === email) {
        flag = 1;
        return user.name;
      }
    });
    if (flag === 0) {
      alert('Invalid Username and Password');
    } else {
      alert('Logged In');
    }

    console.log(hit);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.inContainer}>LOGIN</Text>

      <TextInput
        style={styles.inputField}
        onChangeText={(name) => setName(name)}></TextInput>
      <TextInput
        style={styles.inputField}
        onChangeText={(email) => setEmail(email)}
        secureTextEntry={true}></TextInput>
      <Button onPress={() => handleSubmit(name, email)} title="Submit"></Button>
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
