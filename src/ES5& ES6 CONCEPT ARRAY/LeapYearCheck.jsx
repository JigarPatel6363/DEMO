import { useState } from 'react';

const LeapYearCheck = () => {
  const [year, setYear] = useState('');
  const [isLeapYear, setIsLeapYear] = useState(null);

  const checkLeapYear = () => {
    const parsedYear = parseInt(year, 10);
    if (isNaN(parsedYear)) {
      setIsLeapYear(null); 
    } else {
      setIsLeapYear(
        (parsedYear % 4 === 0 && parsedYear % 100 !== 0) || parsedYear % 400 === 0
      );
    }
  };

  return (
    <div>
      <h1>Leap Year Checker</h1>
      <input
        type="text"
        placeholder="Enter a year"
        value={year}
        onChange={(e) => setYear(e.target.value)}
      />
      <button onClick={checkLeapYear}>Check</button>
      {isLeapYear !== null && (
        <p>{isLeapYear ? 'It is a leap year!' : 'It is not a leap year.'}</p>
      )}
    </div>
  );
};

export default LeapYearCheck;