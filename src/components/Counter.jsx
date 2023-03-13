import { Component } from "react";
import Toggle from "./Toggle";

class Counter extends Component {
    // constructor() {
    //     super();
    //     this.handleDecrement = this.handleDecrement.bind(this)
    // }

    // handleDecrement(event) {
    //     console.log('Decrement button was clicked', event)
    //     console.log({ props: this.props })
    // }

    static defaultProps = {
        step: 1,
        initialValue: 0
    }

    // constructor(props) {
    // super(props)

    // this.state = {
    state = {
        counterValue: this.props.initialValue,
    }
    // }

    handleDecrement = event => {
        this.setState((state, props) => {
            return {
                counterValue: state.counterValue - props.step
            }
        })
    }

    handleIncrement = event => {
        this.setState((state, props) => {
            return {
                counterValue: state.counterValue + props.step
            }
        })

        // for (let i = 0; i < 5; i++) {

        //     this.setState(previousState => {
        //         console.log(previousState.counterValue)

        //         return {
        //             counterValue: previousState.counterValue + 1
        //         }
        //     })
        // }
    }

    handleChange = (isIncrement, step) => {
        this.setState(state => {
            return {
                counterValue: isIncrement ?
                    state.counterValue + step :
                    state.counterValue - step
            }
        })
    }

    someFunc = (isOpen) => {
        console.log('func', isOpen)

        // this.setState({ message: new Date().toLocaleDateString() })
    }

    render() {
        const { step } = this.props
        const { counterValue, message } = this.state

        return (
            <div>
                <h5>I'm Counter</h5>
                <div>Counter value: {counterValue}</div>
                <button type="button"
                    onClick={() => this.handleChange(true, step)}
                // onClick={(event) => this.handleIncrement(event)}
                // onClick={event => {
                //     console.log('Increment button was clicked', event)
                //     console.log({ props: this.props })
                // }}
                >
                    Increment by {step}
                </button>
                <button type="button"
                    onClick={() => this.handleChange(false, step)}
                // onClick={this.handleDecrement}
                >
                    Decrement by {step}
                </button>

                <p>{message}</p>

                <Toggle changeMessage={this.someFunc}>
                    test
                </Toggle>
            </div>
        )
    }
}

export default Counter