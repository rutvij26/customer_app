import React, {FC, useEffect, useState} from 'react';
import AsyncStorage from '@react-native-community/async-storage';

type User = null | {name: string};

export const AuthContext = React.createContext({
  users: null,
  login: (User) => {},
  logout: () => {},
});

export interface AuthProviderProps {}

const AuthProvider: FC<AuthProviderProps> = ({children}) => {
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState({
    name: '',
  });

  // const API = 'https://jsonplaceholder.typicode.com/users'; //API_URL ONLINE

  const API = 'http://10.20.2.32:3000/users'; //API_URL OFFICE

  // const API = 'http://192.168.0.112:3000/users'; //API_URL  HOME

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

  return (
    <AuthContext.Provider
      value={{
        users,
        login: (User) => {
          setUser(User);
          AsyncStorage.setItem('user', JSON.stringify(user.name));
        },
        logout: () => {
          AsyncStorage.removeItem('user');
        },
      }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
