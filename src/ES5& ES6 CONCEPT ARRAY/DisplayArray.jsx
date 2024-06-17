
// 3) let b = [11,22,33,44,55] how to display records?

const DisplayArray = () => {
  const b = [11, 22, 33, 44, 55];

  return (
    <div>
      <h2>Array Elements</h2>
      <ul>
        {b.map((num, index) => (
          <li key={index}>{num}</li>
        ))}
      </ul>
    </div>
  );
};

export default DisplayArray;