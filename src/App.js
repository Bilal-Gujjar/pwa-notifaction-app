import React from 'react';
import './App.css';
import { initNotification } from './services/firebaseServices';

function App() {
  return (
    <div className="App">
      <h1>Hello World</h1>
      <h3>Just CLick On Allow Notification</h3>
      <h4>This is Test VESION OF PWA</h4>
      <button onClick={initNotification}>Configure Notification</button>
    </div>
  );
}

export default App;
