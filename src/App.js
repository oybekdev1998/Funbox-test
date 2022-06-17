import React from 'react';
import Card from './Card';

import './App.css';

function App() {
  return (
    <div className='App'>
        <h2 className='title'>Ты сегодня покормил кота?</h2>
      <div className='content'>
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
}

export default App;
