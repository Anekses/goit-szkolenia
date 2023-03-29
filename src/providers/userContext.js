import { createContext, useContext, useState } from "react";

// const defaultValue = 'My first name'
export const UserContext = createContext()

export const UserProvider = ({ children }) => {
    const [username, setUsername] = useState('');
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [someArgument, setSomeArgument] = useState('Co się stało z abecadło?')

    const logIn = () => {
        setIsLoggedIn(true)
        setUsername('Tomasz')
    }

    const logOut = () => {
        setIsLoggedIn(false)
        setUsername('')
    }
    
    return (
        <UserContext.Provider value={{ username, isLoggedIn, someArgument, setUsername, logIn, logOut, setSomeArgument }}>
            {children}
        </UserContext.Provider>
    )
}

export const useUser = () => useContext(UserContext)

// const user = useContext(UserContext);