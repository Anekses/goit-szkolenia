import { useState } from "react";
import { Username } from "./components/Username";
import { useUser } from "./providers/userContext";

const App = () => {
  const { isLoggedIn, logIn, logOut, someArgument } = useUser()
  const [some, setSome] = useState(1)

  return (
    <div>
      {isLoggedIn && <Username some={some} /> }
      <h2>{someArgument}</h2>
      {isLoggedIn ? (
        <button type="button" onClick={logOut}>OUT</button>
      ) : 
        <button type="button" onClick={logIn}>IN</button>
      }
    </div>
  )
}

export default App;
