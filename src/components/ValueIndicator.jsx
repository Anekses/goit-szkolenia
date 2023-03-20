import { Component } from "react";

class ValueIndicator extends Component {
    // constructor() {
    // super();
    // this.state = {
    //     value: 0
    // }
    // }

    shouldComponentUpdate(nextProps, nextState) {
        const oldProps = this.props

        if (nextProps.value === oldProps.value) {
            return false;
        }

        return true;
    }

    render() {
        const { value, onClick, name } = this.props

        // console.log(`${name} rendered`)

        return (
            <>
                <div>
                    Counter value: {value}
                </div>
                <button onClick={(e) => onClick(name)}>Up</button>
            </>
        )
    }
}

export default ValueIndicator