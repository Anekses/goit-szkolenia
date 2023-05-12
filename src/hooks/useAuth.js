import { useSelector } from "react-redux"
import { selectError, selectIsLoggedIn, selectUser } from "../redux/auth/selectors"

export const useAuth = () => {
    const isLoggedIn = useSelector(selectIsLoggedIn)
    const user = useSelector(selectUser)
    const error = useSelector(selectError);

    return {
        isLoggedIn, user, error
    }
}