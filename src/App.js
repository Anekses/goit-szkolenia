import { Alert } from './components/Alert';
import clsx from 'clsx';
import './App.css';
import styled from 'styled-components';

import PrimaryButton from './buttons/PrimaryButton'
import SecondaryButton from './buttons/SecondaryButton';
import { Component } from 'react';
import Counter from './components/Counter';
import Toggle from './components/Toggle';

class MyComponent extends Component {
  name = 'Bjorn'
  age = 5

  static defaultProps = {
    step: 1
  }

  static propTypes = {

  }

  constructor() {
    super()
    this.age = 6
  }

  shouldReturnAlwaysTrue() {
    return true;
  }

  render() {
    return (
      <div>
        Class Component {this.age}
      </div>
    )
  }
}

function App() {
  const some = 0;

  const className = clsx(
    "first",
    10,
    undefined && "second",
    true && "third",
    false ? "fourth" : "fifth",
    some && "six"
  )

  const Paragraph = styled.h4`
    color: red
  `

  // const [age, setAge] = useState(3);

  // const currentState = { name: 'Tom', age: 15}
  // const updateSomeState = { firstName: 'Bob', age: 30 }

  // const finalState = {
  //   ...currentState,
  //   ...updateSomeState
  // } 

  // const finalState = {
  //   name: 'Tom',
  //   age: 30,
  //   firstName: 'Bob'
  // }

  // const somefunction = () => console.log('some')

  return (
    <>
      <MyComponent firstName='first' />
      <Counter
        step={1}
        initialValue={5}

      />
      {/* <Toggle>
        <div>Test Tooglera</div>
      </Toggle> */}
    </>
  );

}

export default App;
