import React from 'react';
import './App.css';
import Card from './components/card-component/card';

const alert = () => {
  return console.warn('warning. ');
};

function App() {
  return (
    <Card
      title="Title."
      buttons={[{ text: 'button', action: () => alert() }]}
    ></Card>
  );
}

export default App;
