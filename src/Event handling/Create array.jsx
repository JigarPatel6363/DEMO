

export default function Createarray() {

    const stringArray = ['apple', 'banana', 'orange'];

   
    const objectArray = [
      { id: 1, name: 'John' },
      { id: 2, name: 'Doe' },
      { id: 3, name: 'Jane' }
    ];
  return (
    <div>
      <h2>Array of Strings:</h2>
      <ul>

        {stringArray.map((item, index) => (
          
          <li key={index}>{item}</li>
        ))}
      </ul>

      <h2>Array of Objects:</h2>
      <ul>
        
        {objectArray.map((item) => (
         
          <li key={item.id}>

            {item.id}: {item.name}
          </li>
        ))}
      </ul>
    </div>
  )
}
