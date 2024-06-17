// Write a program to perform toggle button [on,off]
import  { useState } from 'react';

const App = () => {
  const [isOn, setIsOn] = useState(false);

  const toggleButton = () => {
    setIsOn(!isOn);
  }

  return (
    <div>
      <h3>toggleButton</h3>
      <button  onClick={toggleButton}>
        {isOn ? 'ON' : 'OFF'}
      </button>
    </div>
  );
}

export default App;
