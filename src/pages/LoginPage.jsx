import { useState } from "react"
import { Navigate, useNavigate } from "react-router-dom"

export const LoginPage = () => {
    // const navigate = useNavigate();

    // //values z formularza
    // const handleLogin = () => {
    //     // const response = await FakeAPI.login(values);
    //     // if (response.success) {
    //         navigate("/", { replace: true });
    //     // }
    // }

    const [isLoginSuccess, setIsLoginSuccess] = useState(false);

    const handleLogin = () => {
        // const response = await FakeAPI.login(values);
        setIsLoginSuccess(true);
    }

    if (isLoginSuccess) {
        return <Navigate to="/" />
    }

    return (
        <div>
            <h1>Login Form</h1>
            <button type="button" onClick={handleLogin}>Login</button>
            {/* <LoginForm onSubmit={handleSubmit} /> */}
        </div>
    )
}