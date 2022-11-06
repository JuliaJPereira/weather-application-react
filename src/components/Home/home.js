import React from "react";
import { Body, Box } from './styles'
import Form from '../Form/form'

function Home() {
  return (
    <>
      <Body>
        <Box>
          <h1>Veja como está o tempo agora na sua cidade!</h1>
          <Form/>
        </Box>
      </Body>
    </>
  );
}

export default Home;
