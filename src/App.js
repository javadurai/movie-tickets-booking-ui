import './App.css';
import React, { Component }  from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import AppNav from './components/AppNav';
import SeatSelector from './components/SeatSelector';
import AppFooter from './components/AppFooter';

function App() {
  return (
    <div className="App">
      <Container>
        <AppNav />
        <SeatSelector rows={5} cols={5}/>
        <AppFooter/>
      </Container>
    </div>
  );
}

export default App;
