// 1)Perform add,sub,mult,div using Class bassed and Function based components.

import { useState } from 'react';

const Calculator = () => {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [result, setResult] = useState(0);

  const handleNum1Change = (e) => {
    setNum1(parseInt(e.target.value));
  }

  const handleNum2Change = (e) => {
    setNum2(parseInt(e.target.value));
  }

  const add = () => {
    setResult(num1 + num2);
  }

  const subtract = () => {
    setResult(num1 - num2);
  }

  const multiply = () => {
    setResult(num1 * num2);
  }

  const divide = () => {
    setResult(num1 / num2);
  }

  return (
    <div>
      <input type="number" value={num1} onChange={handleNum1Change} />
      <br />
      <input type="number" value={num2} onChange={handleNum2Change} />
      <br /><br />
      <button onClick={add}>Add</button>
      <button onClick={subtract}>Subtract</button>
      <button onClick={multiply}>Multiply</button>
      <button onClick={divide}>Divide</button>
      <h1>Result: {result}</h1>
    </div>
  );
}

export default Calculator;

