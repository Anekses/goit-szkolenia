import { useState } from "react";
import { useToggle } from "./hooks/useToggle";

const App = () => {

  const { isOpen, open, close} = useToggle(true);

  // const [isOpen, setIsOpen] = useState(false);
  // const openModal = () => setIsOpen(true);
  // const closeModal = () => setIsOpen(false);

  return (
    <div>
      {isOpen ? 
      <p>
        This is my Modal!
        <button onClick={close}>Close modal</button>
      </p> : <button onClick={open}>Open modal</button>
      }
    </div>
  )
}

export default App;
