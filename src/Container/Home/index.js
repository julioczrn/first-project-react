import React, { useState, useRef } from 'react';
import axios from 'axios';


import People from '../../assets/people.svg';
import Arrow from '../../assets/Seta.svg';

import {
  Container,
  Button,
  Image,
  ContainerItens,
  InputLabel,
  Input,
  H1,
} from "./styles";

function App() {
  const [users, setUsers] = useState([]);
  const inputName = useRef()
  const inputAge = useRef()

  async function addNewUser() {
    const { data: newUser } = await axios.post("http://localhost:3001/users", {
      name: inputName.current.value,
      age: inputAge.current.value
    })
    console.log(newUser)
    setUsers([...users, newUser,]);
  }

  return (
    <Container>
      <Image alt='logo-image' src={People} />
      <ContainerItens>

        <H1> Ola!</H1>

        <InputLabel>Nome</InputLabel>
        <Input ref={inputName} placeholder='Nome' />

        <InputLabel>Idade</InputLabel>
        <Input ref={inputAge} placeholder='Idade' />


        <Button onClick={addNewUser}>
          Cadastrar <img alt='seta' src={Arrow} />
        </Button>
      </ContainerItens>
    </Container>
  );
}

export default App;