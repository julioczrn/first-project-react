import React, { useState, useRef } from 'react';

import People from './assets/people.svg';
import Seta from './assets/Seta.svg';
import Trash from './assets/Trash.svg';
import axios from 'axios';

import {
  Container,
  H1,
  Image,
  ContainerItens,
  InputLabel,
  Input,
  Button,
  User
} from "./styles";

function App() {
  const [users, setUsers] = useState([]);
  const inputName = useRef()
  const inputAge = useRef()

  async function addNewuser() {
    //setUsers([...users,{id: Math.random(), name: inputName.current.value, age: inputAge.current.value}])
    const data = await axios.post("http://localhost:3001", {
       name: inputName.current.value,
        age: inputAge.current.value, 
      })};

  function deleteUser(userId) {
    const newUsers = users.filter((user) => user.id !== userId);

    setUsers(newUsers);
  }

  return (
    <Container>
      <Image alt="logo-imagem" src={People} />
      <ContainerItens>

        <H1>Ola!</H1>

        <InputLabel>Nome</InputLabel>
        <Input ref={inputName} placeholder='Nome' />

        <InputLabel>Idade</InputLabel>
        <Input ref={inputAge} placeholder='Idade' />

        <Button onClick={addNewuser}>
          Cadastrar
          <img alt='Seta' src={Seta} />
        </Button>


        <ul>
          {users.map(user => (
            <User key={user.id}>
              <p>{user.name}</p> - <p>{user.age}</p>
              <button onClick={() => deleteUser(user.id)}>
                <img src={Trash} alt='lata-de-lixo'></img></button>
            </User>
          ))}
        </ul>
      </ContainerItens>
    </Container>
  );
}

export default App;