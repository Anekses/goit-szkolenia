import { useState, useEffect } from "react";

const App = () => {
  // const handleChange = () => {
  //   setValue(prevValue => prevValue + 3)
  // }

  // const [value, setValue] = useState(10);
  // const [second, setSecond] = useState(5)

  // const [userValue, setUserValue] = useState({
  //   username: 'abc',
  //   todos: [{ text: 'H'}],
  //   someBoolean: false,
  // });

  // const [username, setUsername] = useState({
  //   firstName: 'R',
  //   secondName: 'A'
  // });
  // const [todos, setTodos] = useState([{ text: 'H'}])
  // const [isActive, setIsActive] = useState(true)

  // const handleChange = (value) => {
  //   if (isActive) {
  //     setUsername({
  //       ...username,
  //       firstName: value
  //     })
  //   }
  // }

  
  // if (isActive) {
  //   // You cannot in "if"
  //   const [donut, setDonut] = useState('awesome');
  // }

  const [value, setValue] = useState(0);
  const [other, setOther] = useState(0);
  const [again, setAgain] = useState(0);

  useEffect(() => {
    console.log(`You clicked ${value} times. And again ${again} `)
    // fetch(...)
    // setOther(axios.get(...))
  }, [value, again])

  useEffect(() => {
    //Do something only once
  }, [])

  useEffect(() => {
    //Every time
  })

  return (
    <div>
      <p>You clicked {value} times. And Value1 {other} - Value2 {again}</p>
      <button type="button" onClick={() => setValue(value + 1)}>Click value</button>
      <button type="button" onClick={() => setOther(other + 1)}>Click other</button>
    </div>
    // <div>
    //   {username.firstName} {username.secondName} {todos.toString()} {isActive}
    //   <button onClick={() => handleChange('some new first name')}>some</button> 
    //   <ArticleList articles={username}></ArticleList>
    // </div>
    // <div>
    //   {value} , {second}
    //   <button type="button" onClick={() => setSecond(second + 1)}>
    //       Increase
    //   </button>
    //   <button type="button" onClick={() => setValue(prev => prev + 2)}>
    //       Increase other
    //   </button>
    //   <button type="button" onClick={handleChange}>
    //       Increase other again
    //   </button>
    // </div>
  )
}

export default App;
