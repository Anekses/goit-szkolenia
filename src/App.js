import { Alert } from './components/Alert';
import clsx from 'clsx';
import './App.css';
import styled from 'styled-components';

import PrimaryButton from './buttons/PrimaryButton'
import SecondaryButton from './buttons/SecondaryButton';

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
  return (
    <>
      <Alert variant="info">
        Please update your email!
      </Alert>
      <Alert variant="error" outlined={true}>
        There was an error during transaction!
      </Alert>
      <Alert variant="success" elevated={true}>
        Payment received, thank you for your purchase!
      </Alert>
      <Alert variant="warning" outlined={true} elevated={true}>
        Please update your profile contact information
      </Alert>
      <Paragraph>
        Test
      </Paragraph>
      {/* <Button variant="primary">Primary</Button>
      <Button variant="secondary">Secondary</Button> */}
      <PrimaryButton />
      <SecondaryButton />
    </>
  );

}

export default App;
