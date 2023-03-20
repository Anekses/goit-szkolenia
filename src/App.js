import './App.css';
import Container from './components/Container';
import ErrorBoundary from './components/ErrorBoundary';
import LoginForm from './components/LoginForm';
import SignUpForm from './components/SignUpForm';

function App() {

  return (
    <>
      {/* <LoginForm onSubmit={values => console.log(values)} /> */}
      {/* <SignUpForm onSubmit={values => console.log(values)} /> */}
      {/* <Container /> */}
      <ErrorBoundary />
    </>
  );

}

export default App;
