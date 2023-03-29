import { useEffect } from "react";
import { useUser } from "../providers/userContext"

export const Username = () => {
    const { username, isLoggedIn, setSomeArgument } = useUser();

    useEffect(() => {
        setSomeArgument('Abecadło z pieca spadło')
    }, []);

    return (
        <h4>
            {isLoggedIn && <p>{username}</p>}
        </h4>
    )
}