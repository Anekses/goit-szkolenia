import { nanoid } from "nanoid";
import { Component } from "react";
import Alert from "./Alert";

const Gender = {
    MALE: "male",
    FEMALE: "female"
}

const INITIAL_STATE = {
    logina: '',
    email: '',
    password: '',
    isActive: true,
    gender: null,
    age: 0
}

class SignUpForm extends Component {
    state = {
        ...INITIAL_STATE
    }

    handleChange = (event, defaultValue) => {
        const { name, value, type, checked } = event.target

        // console.log({ name, value, type, checked })

        // if (type === 'checkbox') {
        //   const checked = event.target.checked;
        //   this.setState({[name]: checked})
        // } else if { ... }

        const finalValue = value ?? defaultValue;

        if (name === 'age') {
            const parsedValue = parseInt(finalValue);

            this.setState({
                "age": parsedValue
            })
        }

        this.setState({
            [name]: type === "checkbox" ? checked : finalValue
        })
    }

    handleSubmit = event => {
        event.preventDefault();

        this.props.onSubmit({ ...this.state })

        this.reset()
    }

    reset = () => {
        this.setState({
            ...INITIAL_STATE
        })
    }

    constructor() {
        super()
        // console.log('constructor')
    }

    componentDidMount() {
        // console.log('component did mount')
        // this.setState
    }

    componentDidUpdate() {
        // console.log('component did update')
    }

    componentWillUnmount() {
        // console.log('component unmount')
    }

    render() {
        // console.log('render')
        const { logina, email, password, isActive, gender, age } = this.state

        const loginInputId = nanoid()
        const emailInputId = nanoid()

        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label
                        htmlFor={loginInputId}>Login</label>
                    <input
                        id={loginInputId}
                        name="logina"
                        type="text"
                        placeholder="Enter login"
                        value={logina}
                        onChange={this.handleChange} />

                    <label
                        htmlFor={emailInputId}>Email</label>
                    <input
                        id={emailInputId}
                        name="email"
                        type="email"
                        placeholder="Enter email"
                        value={email}
                        onChange={(event) => this.handleChange(event, 'abba')} />

                    <label
                        htmlFor="myPassword">Password</label>
                    <input
                        id="myPassword"
                        name="password"
                        type="password"
                        placeholder="Enter password"
                        value={password}
                        onChange={this.handleChange} />

                    <label>
                        Is user active
                        <input name="isActive" type="checkbox" checked={isActive} onChange={this.handleChange} />
                    </label>

                    <section>
                        <h5>Choose your gender</h5>

                        <label>
                            Male
                            <input
                                checked={gender === Gender.MALE}
                                value={Gender.MALE}
                                type="radio"
                                name="gender"
                                onChange={this.handleChange}
                            />
                        </label>

                        <label htmlFor="gender_female">
                            Female
                        </label>
                        <input
                            checked={gender === Gender.FEMALE}
                            value={Gender.FEMALE}
                            id="gender_female"
                            type="radio"
                            name="gender"
                            onChange={this.handleChange}
                        />
                    </section>

                    <label>
                        Choose your age
                        <select name="age" value={age} onChange={this.handleChange}>
                            <option value="18">18</option>
                            <option value="26">26</option>
                            <option value="40">40</option>
                        </select>
                    </label>

                    <button type="submit" disabled={!isActive} >Sign up as {logina}</button>
                </form>
                {isActive &&
                    <Alert variant='success'>Is true</Alert>
                }
            </div>
        )
    }
}

export default SignUpForm