// 3)Take one take text box and perform on change events using state less & state ful components.



const changas = () => {
  const handleChange = (e) => {
    console.log(e.target.value);
  }

  return (
    <div>
      <h2>Stateless Component</h2>
      
      <input type="text" onChange={handleChange} placeholder="Enter text" />
    </div>
  );
}

export default changas;