

const EvenOddElements = () => {
  const arr = [11, 22, 33, 44, 55];

 
  const evenElements = arr.filter((num) => num % 2 === 0);
  const oddElements = arr.filter((num) => num % 2 !== 0);

  return (
    <div>
      <h1>Even and Odd Elements</h1>
      <p>Original Array: {arr.join(', ')}</p>
      <p>Even Elements: {evenElements.join(', ')}</p>
      <p>Odd Elements: {oddElements.join(', ')}</p>
    </div>
  );
};

export default EvenOddElements;