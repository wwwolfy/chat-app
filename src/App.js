import React, {useState} from 'react';
import Input from './ui-components/inputs/Input';
import './App.scss';

function App() {
  const [message, setMessage] = useState('');
  return (
    <div className="App">
      <Input placeholder="Message" onChange={data => setMessage(data)} value={message} name="message" />
    </div>
  );
}

export default App;
