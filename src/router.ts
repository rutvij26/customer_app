import  React from 'react';
import {StackNavigator} from 'react-navigation';

import  App from './App';
import Display from './Components/Display';
import Login from './Components/Login';
import Register from './Components/Registration';


export const AppNavigator = StackNavigator({
    Display:{
        screen:Display
    },
    App:{
        screen:App
    },
    Login:{
        screen:Login
    },
    Register:{
        screen:Register
    },
    
})