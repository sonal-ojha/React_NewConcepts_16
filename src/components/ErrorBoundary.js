import React, { Component } from 'react';

export class ErrorBoundary extends Component {
    state = {
        displayError: false,
    }

    componentDidCatch(error, info) {
        const { displayError } = this.state;
        this.setState({
            displayError : !displayError,
        })
        console.log('error =', error, info);
    }

    render() {
        if (this.state.displayError) {
            return (
                <div>
                    Something Went Wrong!!
                </div>
            )
        }
        return this.props.children
    }
}

export default ErrorBoundary;
