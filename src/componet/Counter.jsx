// 2) Take 2 buttons one for increment & another for decrement & take one default counter 0.
import  { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Counter: {count}</p>
      <button onClick={() => setCount(count + 5)}>Increment</button>
      <button onClick={() => setCount(count - 5)}>Decrement</button>
    </div>
  );
}

export default Counter;

