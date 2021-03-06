import React, { useRef, useState, useMemo } from 'react';
import './styles/reset.scss';
import styled, { css, ThemeProvider } from 'styled-components';
import Button from './Button';
import Hello from './Hello';
import Wrapper from './wrapper';
import Counter from './Counter';
import InputSample from './InputSample';
import CreateUser from './CreateUser';
import UserList from './UserList';
import Slider from './Carousel/Slider';
import InfiniteScrollLoop from './InfiniteScrollLoop';

function App() {
  return <Slider />;
}

// const AppBlock = styled.div`
//   width: 512px;
//   margin: 0 auto;
//   margin-top: 4rem;
//   border: 1px solid black;
//   padding: 1rem;
// `;

// const ButtonGroup = styled.div`
//   & + & {
//     margin-top: 1rem;
//   }
// `;

// function App() {
//   return (
//     <ThemeProvider
//       theme={{
//         palette: {
//           blue: '#228be6',
//           gray: '#495057',
//           pink: '#f06595',
//         },
//       }}
//     >
//       <AppBlock>
//         <ButtonGroup>
//           <Button size="large">BUTTON</Button>
//           <Button>BUTTON</Button>
//           <Button size="small">BUTTON</Button>
//         </ButtonGroup>
//         <ButtonGroup>
//           <Button color="gray" size="large">
//             BUTTON
//           </Button>
//           <Button color="gray">BUTTON</Button>
//           <Button color="gray" size="small">
//             BUTTON
//           </Button>
//         </ButtonGroup>
//         <ButtonGroup>
//           <Button color="pink" size="large">
//             BUTTON
//           </Button>
//           <Button color="pink">BUTTON</Button>
//           <Button color="pink" size="small">
//             BUTTON
//           </Button>
//         </ButtonGroup>
//         <ButtonGroup>
//           <Button size="large" outline>
//             BUTTON
//           </Button>
//           <Button color="gray" outline>
//             BUTTON
//           </Button>
//           <Button color="pink" size="small" outline>
//             BUTTON
//           </Button>
//         </ButtonGroup>
//         <ButtonGroup>
//           <Button size="large" fullWidth>
//             BUTTON
//           </Button>
//           <Button size="large" color="gray" fullWidth>
//             BUTTON
//           </Button>
//           <Button size="large" color="pink" fullWidth>
//             BUTTON
//           </Button>
//         </ButtonGroup>
//       </AppBlock>
//     </ThemeProvider>
//   );
// }

// export default App;

// function countActiveUsers(users) {
//   console.log('?????? ????????? ?????? ?????? ???...');
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
//     // ????????? ?????? ??? ????????? ?????? ???????????? ??????
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
//     // user.id ??? ??????????????? ???????????? ?????? ????????? ???????????? ????????? ????????? ??????
//     // user.id ??? id????????? ?????????
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
//   // useMemo : useMemo ??? ????????? ???????????? : ????????? ???????????? ???????????? ??????
//   // ????????? ???????????? : deps ?????? (??? ?????? ?????? ?????? ????????? ?????????) ? ????????? ????????? ????????? ???????????? ?????? ?????? : ????????? ????????? ?????? ?????????

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
//       <div>??????????????? ??? : {count}</div> */}
//     </>
//   );
// }

export default App;
