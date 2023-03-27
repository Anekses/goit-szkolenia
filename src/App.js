import { useState, useEffect } from "react";

const App = () => {
  const [firstValue, setFirstValue] = useState(1)
  const [secondValue, setSecondValue] = useState(2)
  const [sum, setSum] = useState(firstValue + secondValue)

  useEffect(() => {
    setSum(firstValue + secondValue)
    // const newSum = firstValue + secondValue;

    // axios ... (newSum)

    // console.log({firstValue})

    // return () => {
    //   console.log('Unmount')
    // }
  }, [firstValue, secondValue])

  const sumSetTo10 = () => {
    setSum(10)
  }

  return (
    <div>
      <p>Sum is: {sum}</p>
      {/* <button type="button" onClick={() => setSum(firstValue + secondValue)}>Calculate Sum</button> */}
      <button type="button" onClick={sumSetTo10}>Set Sum to 10</button>
      <button type="button" onClick={() => setFirstValue(firstValue + 1)}>Add 1 to firstValue</button>
      <button type="button" onClick={() => setSecondValue(prev => prev + 1)}>Add 1 to secondValue</button>
    </div>
  )
}

export default App;
