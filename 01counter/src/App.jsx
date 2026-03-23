import { useState } from "react";

function App() {
  const [counter, setCounter] = useState(15);

  // let counter = 15;

  const addValue = () => {
    // counter = counter + 1;
    if (counter >= 20) return;
    setCounter((precounter) => precounter + 1);
    setCounter((precounter) => precounter + 1);
    setCounter((precounter) => precounter + 1);
    setCounter((precounter) => precounter + 1);
  };

  const removeValue = () => {
    if (counter <= 0) return;
    setCounter(counter - 1);
  };
  return (
    <>
      <h1>Chai aur react</h1>
      <h2>Counter value: {counter}</h2>

      <button onClick={addValue}>Add value : {counter}</button>
      <br />
      <button onClick={removeValue}>remove value : {counter}</button>
    </>
  );
}

export default App;
