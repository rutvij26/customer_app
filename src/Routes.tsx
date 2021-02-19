import React, {FC} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import Login from './Components/Login';
import {AuthParamList} from './AuthParamList';
import Display from './Components/Display';
import App from './App';

export interface RoutesProps {}

const Stack = createStackNavigator<AuthParamList>();

const Routes: FC<RoutesProps> = ({}) => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          header: () => null,
        }}
        initialRouteName="Login">
        <Stack.Screen name="Login" component={Login}></Stack.Screen>
        <Stack.Screen name="Display" component={Display} />
        <Stack.Screen name="App" component={App} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
