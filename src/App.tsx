import React, {FC, useEffect, useState} from 'react';
import Login from './Components/Login';

const App: FC = () => {
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
  };

  return (
    <React.Fragment>
      <Login handleSubmit={handleSubmit} />
    </React.Fragment>
  );
};

export default App;
