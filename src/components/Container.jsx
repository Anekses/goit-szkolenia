import { Component } from "react";
import ErrorBoundary from "./ErrorBoundary";
import ValueIndicator from "./ValueIndicator";

class Container extends Component {
    constructor() {
        super()
        this.state = {
            valueFirst: 0,
            valueSecond: 0,
        }
    }

    handleClick = (name) => {
        this.setState((state) => ({
            [name]: state[name] + 1
        }))
    }

    render() {
        // setTimeout(() => {
        // throw new Error('Error')
        // }, 2000)

        return (
            <div>
                Test
                {/* <ValueIndicator name='valueFirst' value={this.state.valueFirst} onClick={this.handleClick} /> */}
                {/* <ValueIndicator name='valueSecond' value={this.state.valueSecond} onClick={this.handleClick} /> */}
            </div>
        )
    }
}

export default Container