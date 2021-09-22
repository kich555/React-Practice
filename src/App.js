import React, { useRef, useState } from 'react';
import Hello from './Hello';
import Wrapper from './wrapper';
import Counter from './Counter';
import InputSample from './InputSample';
import CreateUser from './CreateUser';
import UserList from './UserList';

function App() {
  const [inputs, setInputs] = useState({
    username: '',
    email: '',
  });

  const { username, email } = inputs;

  const onChange = (e) => {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  const [users, setUsers] = useState([
    {
      id: 1,
      username: 'joan',
      email: 'public.joan@gmail.com',
    },
    {
      id: 2,
      username: 'jenson',
      email: 'jenson@gmail.com',
    },
    {
      id: 3,
      username: 'kin',
      email: 'kin@gmail.com',
    },
  ]);

  const nextId = useRef(4);

  const onCreate = () => {
    // 나중에 구현 할 배열에 항목 추가하는 로직
    /// ...
    const user = {
      id: nextId.current,
      username,
      email,
    };

    setUsers([users.concat(user)]);

    setInputs({
      username: '',
      email: '',
    });
    nextId.current += 1;
  };

  return (
    <>
      <CreateUser
        username={username}
        email={email}
        onChange={onChange}
        onCreate={onCreate}
      />
      <UserList users={users} />
    </>
  );
}

export default App;
