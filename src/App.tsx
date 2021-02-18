import React, {Component, FC, useEffect, useState} from 'react';
import Login from './Components/Login';
import 'react-native-gesture-handler';
import {NavigationContainer} from '../node_modules/@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Display from './Components/Display';

interface AppProps {
  navigation;
}

const App: FC<AppProps> = () => {
  const [users, setUsers] = useState([]);

  // const API = 'https://jsonplaceholder.typicode.com/users'; //API_URL ONLINE

  // const API = 'http://10.20.2.28:3000/users'; //API_URL OFFICE

  const API = 'http://192.168.0.112:3000/users'; //API_URL  HOME

  //Fetch Data From APi

  useEffect(() => {
    getUsers();
  }, []);

  //Function for getting Data
  const getUsers = async () => {
    const Data = await fetch(API);

    const Users = await Data.json();

    setUsers(Users);
  };

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
    } else {
      alert('Logged In');
    }
  };

  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <React.Fragment>
          <Stack.Screen name="Login">
            {() => <Login handleSubmit={handleSubmit} />}
          </Stack.Screen>
          <Stack.Screen name="Display">{() => <Display />}</Stack.Screen>
          <Stack.Screen name="App" component={App} />
        </React.Fragment>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
