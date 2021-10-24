import React, { useRef, useState, useMemo } from 'react';
import styled, { css, ThemeProvider } from 'styled-components';
import Button from './Button';
import Hello from './Hello';
import Wrapper from './wrapper';
import Counter from './Counter';
import InputSample from './InputSample';
import CreateUser from './CreateUser';
import UserList from './UserList';

const AppBlock = styled.div`
  width: 512px;
  margin: 0 auto;
  margin-top: 4rem;
  border: 1px solid black;
  padding: 1rem;
`;

const ButtonGroup = styled.div`
  & + & {
    margin-top: 1rem;
  }
`;

function App() {
  return (
    <ThemeProvider
      theme={{
        palette: {
          blue: '#228be6',
          gray: '#495057',
          pink: '#f06595',
        },
      }}
    >
      {/* <AppBlock>
        <ButtonGroup>
          <Button size="large">BUTTON</Button>
          <Button>BUTTON</Button>
          <Button size="small">BUTTON</Button>
        </ButtonGroup>
        <ButtonGroup>
          <Button color="gray" size="large">
            BUTTON
          </Button>
          <Button color="gray">BUTTON</Button>
          <Button color="gray" size="small">
            BUTTON
          </Button>
        </ButtonGroup>
        <ButtonGroup>
          <Button color="pink" size="large">
            BUTTON
          </Button>
          <Button color="pink">BUTTON</Button>
          <Button color="pink" size="small">
            BUTTON
          </Button>
        </ButtonGroup>
        <ButtonGroup>
          <Button size="large" outline>
            BUTTON
          </Button>
          <Button color="gray" outline>
            BUTTON
          </Button>
          <Button color="pink" size="small" outline>
            BUTTON
          </Button>
        </ButtonGroup>
        <ButtonGroup>
          <Button size="large" fullWidth>
            BUTTON
          </Button>
          <Button size="large" color="gray" fullWidth>
            BUTTON
          </Button>
          <Button size="large" color="pink" fullWidth>
            BUTTON
          </Button>
        </ButtonGroup>
      </AppBlock> */}
    </ThemeProvider>
  );
}

export default App;

// function countActiveUsers(users) {
//   console.log('활성 사용자 수를 세는 중...');
//   return users.filter((user) => user.active).length;
// }

// function App() {
//   const [inputs, setInputs] = useState({
//     username: '',
//     email: '',
//   });

//   const { username, email } = inputs;

//   const onChange = (e) => {
//     const { name, value } = e.target;
//     setInputs({
//       ...inputs,
//       [name]: value,
//     });
//   };

//   const [users, setUsers] = useState([
//     {
//       id: 1,
//       username: 'joan',
//       email: 'public.joan@gmail.com',
//       active: true,
//     },
//     {
//       id: 2,
//       username: 'jenson',
//       email: 'jenson@gmail.com',
//       active: false,
//     },
//     {
//       id: 3,
//       username: 'kin',
//       email: 'kin@gmail.com',
//       active: false,
//     },
//   ]);

//   const nextId = useRef(4);

//   const onCreate = () => {
//     // 나중에 구현 할 배열에 항목 추가하는 로직
//     // ...
//     const user = {
//       id: nextId.current,
//       username,
//       email,
//     };

//     setUsers([...users, user]);

//     setInputs({
//       username: '',
//       email: '',
//     });
//     nextId.current += 1;
//   };

//   const onRemove = (id) => {
//     // user.id 가 파라미터로 일치하지 않는 원소만 추출해서 새로운 배열을 만듬
//     // user.id 가 id인것을 제거함
//     setUsers(users.filter((user) => user.id !== id));
//   };

//   const onToggle = (id) => {
//     setUsers(
//       users.map((user) =>
//         user.id === id ? { ...user, active: !user.active } : user,
//       ),
//     );
//   };

//   const count = useMemo(() => countActiveUsers(users), [users]);
//   // useMemo : useMemo 의 첫번째 파라미터 : 어떻게 연산할지 정의하는 함수
//   // 두번째 파라미터 : deps 배열 (이 배열 안에 넣은 내용이 바뀌면) ? 우리가 등록한 함수를 호출해서 값을 연산 : 이전에 연산한 값을 재사용

//   return (
//     <>
//       <Counter />
//       {/* <CreateUser
//         username={username}
//         email={email}
//         onChange={onChange}
//         onCreate={onCreate}
//       />
//       <UserList users={users} onRemove={onRemove} onToggle={onToggle} />
//       <div>활성사용자 수 : {count}</div> */}
//     </>
//   );
// }

// export default App;
