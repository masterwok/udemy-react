import React, {Component} from 'react';


/**
 * This component is used to catch and render an error message when a component
 * fails to render. It's important as it allows the rest of the app to continue rather than
 * crashing with an error. To use this component, import it and wrap a failing component in JSX.
 */
class ErrorBoundary extends Component {

    state = {
        hasError: false
        , errorMessage: ''
    };

    componentDidCatch = (error, info) => this.setState({
        hasError: true
        , errorMessage: error
    });

    render() {
        if (this.state.hasError) {
            return <h1>{this.state.errorMessage}</h1>
        }

        return this.props.children;
    }
}

export default ErrorBoundary;
