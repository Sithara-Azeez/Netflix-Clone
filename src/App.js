import React from 'react';
import './App.css';
import NavBar from './Components/NavBar/NavBar';
import {originals, action, comedy, romance} from './urls'
import Banner from './Components/Banner/Banner';
import RowPost from './Components/RowPost/RowPost';



function App() {
  return (
    <div className="App">
      <h1>sithara</h1>
      < NavBar />
      <Banner />
      <RowPost url={originals} title='Netflix Originals' />
      <RowPost url={action} title='Action' isSmall />
      <RowPost url={comedy} title='Comedy Movies' />
      <RowPost url={romance} title='Romance' isSmall />
      
    </div>
  );
}

export default App;
