import React from 'react';
import { Container } from 'react-bootstrap';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import CsvEntradasComponent from './components/CsvEntradasComponent';
import CsvSaidasComponent from './components/CsvSaidasComponent';



function App() {
  return (
    <BrowserRouter>
      <Container>

        <Routes>
        <Route path='/' element={<CsvEntradasComponent />}></Route>
          <Route path='csv/saida' element={<CsvSaidasComponent />}></Route>
        </Routes>
      </Container>
    </BrowserRouter>



  );
}

export default App;
