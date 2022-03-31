import React from 'react';
import {  Container } from 'react-bootstrap';
import CsvEntradasComponent from './components/CsvEntradasComponent';
import CsvSaidasComponent from './components/CsvSaidasComponent';


 
function App() {
  return (
    <>
    <Container>
    <h2>Csv de Entrada</h2>
    <CsvEntradasComponent></CsvEntradasComponent> 
    <h2>Csv de Saída com resultados da atualização</h2>
    <CsvSaidasComponent></CsvSaidasComponent>
    </Container>
    
    </>
     
  );
}

export default App;
