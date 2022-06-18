import React, { useEffect, useState } from "react";
import ReactDom from "react-dom";
import SayHello from "./components/sayHello";

const Index = () => {
  console.log("first");
  const [num, setNum] = useState(0);
  const countUp = () => {
    setNum(num + 1);
  };

  const [flag, setFlag] = useState(false);
  const onClickSwitch = () => {
    setFlag(!flag);
  };

  useEffect(() => {
    console.log("second");
    if (num > 0) {
      if (num % 3 === 0) {
        flag || setFlag(true);
      } else {
        flag && setFlag(false);
      }
    }
  }, [num]);
  // useEffectは第二引数([内の要素])の値が変化したときにだけ処理を走らせる

  return (
    <>
      <p>{num}</p>
      <button onClick={countUp}>count</button>
      <SayHello greeting="hello" />
      <button onClick={onClickSwitch}>on/off</button>
      {flag && <p>('-')</p>}
    </>
  );
};
export default Index;
ReactDom.render(<Index />, document.getElementById("root"));
