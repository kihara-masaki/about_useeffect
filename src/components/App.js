import React, { useState } from "react";

const App = () => {
  const [num, setNum] = useState(0);
  const countUp = () => {
    setNum(num + 1);
  };
  return (
    <>
      <p>{num}</p>
      <button onClick={countUp}>count</button>
    </>
  );
};
export default App;
