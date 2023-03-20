import { Component } from "react";
import Container from "./Container";

class ErrorBoundary extends Component {
    state = { hasError: false }

    componentDidCatch(error, info) {
        this.setState({
            hasError: true
        })

        console.log('test')

        //retry to external API
        //call API with error message
    }

    render() {
        const { hasError } = this.state

        if (hasError) {
            return (
                <div>Something went wrong</div>
            )
        }

        return <Container />
    }
}

export default ErrorBoundary