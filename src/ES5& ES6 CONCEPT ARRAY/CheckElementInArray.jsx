
// 4) find 44 element is include in array or not? if element is found return "No is found" else "No is not found" print message.

const CheckElementInArray = () => {
  const b = [11, 22, 33, 44, 55];
  const elementToFind = 44;
  const message = b.includes(elementToFind) ? "No is found" : "No is not found";

  return (
    <div>
      <h2>Check Element in Array</h2>
      <h2>Array = {b.join(",")}</h2>
      <p>Element is = {elementToFind}</p>
      <p>{message}</p>
    </div>
  );
};

export default CheckElementInArray;