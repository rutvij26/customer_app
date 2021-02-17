import React, {FC, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Button,
  TouchableOpacity,
} from 'react-native';

interface Props {}

interface State {
  User: Object;
}

export const handleSubmit = () => {
  alert('Logged In!');
};

const App: FC<State> = () => {
  const [name, setName] = useState('');
  const [pass, setPass] = useState('');

  return (
    <View style={styles.container}>
      <Text style={styles.inContainer}>LOGIN</Text>
      <TextInput
        style={styles.inputField}
        onChangeText={(name) => setName(name)}></TextInput>
      <TextInput
        style={styles.inputField}
        onChangeText={(pass) => setPass(pass)}
        secureTextEntry={true}></TextInput>
      <Button onPress={handleSubmit} title="Submit"></Button>
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
    borderColor: 'gray',
    borderWidth: 1,
    margin: 10,
  },
  button: {
    margin: 10,
  },
});

export default App;
