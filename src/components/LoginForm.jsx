import { Component } from "react";

class LoginForm extends Component {

    handleSubmit = event => {
        event.preventDefault()

        const form = event.currentTarget;
        const login = form.elements.login.value;
        const password = form.elements.password.value;

        this.props.onSubmit({ login, password })

        form.reset()
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input type="text" name="login" />
                <input type="password" name="password" />
                <button type="submit">Login</button>
            </form>
        )
    }
}

export default LoginForm