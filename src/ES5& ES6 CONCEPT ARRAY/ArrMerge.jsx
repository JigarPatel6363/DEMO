


const ArrMerge = () => {
  const a = [11, 22, 33, 44, 55];
  const arr = [1, 2, 3, 4, 5];

  // Merge the arrays
  const mergedArray = [...a, ...arr];

  return (
    <div>
      <h1>Merged Array</h1>
      <p>{mergedArray.join(', ')}</p>
    </div>
  );
};

export default ArrMerge;