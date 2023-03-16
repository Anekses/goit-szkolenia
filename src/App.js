import './App.css';
import LoginForm from './components/LoginForm';
import SignUpForm from './components/SignUpForm';

function App() {

  return (
    <>
      {/* <LoginForm onSubmit={values => console.log(values)} /> */}
      <SignUpForm onSubmit={values => console.log(values)} />
    </>
  );

}

export default App;
