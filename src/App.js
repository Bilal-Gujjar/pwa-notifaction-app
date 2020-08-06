import React from 'react';
import './App.css';
import { initNotification } from './services/firebaseServices';

function App() {
  return (
    <div className="App">
      <h1>Hello World</h1>
      <h3>Just CLick On Allow Notification</h3>
      <button onClick={initNotification}>Configure Notification</button>
    </div>
  );
}

export default App;
