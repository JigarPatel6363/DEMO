
// 3)Write a program to perform conditional rendering

import  { useState } from 'react';

const App = () => {
  const [isLogged, setIsLogged] = useState(false);

  const toggleLogin = () => {
    setIsLogged(!isLogged);
  }

  return (
    <div>
      <button onClick={toggleLogin}>
        {isLogged ? 'Logout' : 'Login'}
      </button>
      {isLogged ? (
        <h2>Welcome, User!</h2>
      ) : (
        <h2>Please log in.</h2>
      )}
    </div>
  );
}

export default App;
