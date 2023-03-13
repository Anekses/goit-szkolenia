import { Component } from "react";

class Toggle extends Component {
    state = { isOpen: false, someProp: 123 }

    show = () => this.setState({ isOpen: true })

    hide = () => this.setState({ isOpen: false })

    toggle = () => {
        this.setState(prevState => ({
            isOpen: !prevState.isOpen
        }))
    }

    render() {
        const { isOpen } = this.state
        const { children, changeMessage } = this.props

        return (
            <div>
                <button onClick={this.show}>Show</button>
                <button onClick={this.hide}>Hide</button>
                <button onClick={this.toggle}>{isOpen ? "Hide" : "Show"}</button>
                <button onClick={() => changeMessage(isOpen)}>Click me!</button>

                {isOpen && children}
            </div>
        )
    }
}

export default Toggle