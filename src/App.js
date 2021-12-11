import React, {useState} from 'react';
import {Input, Button} from './ui-components';
import './App.scss';

function App() {
  const [message, setMessage] = useState('');
  return (
    <div className="App">
      <Input placeholder="Message" onChange={data => setMessage(data)} value={message} name="message" />
      <Button>Start</Button>
    </div>
  );
}

export default App;
