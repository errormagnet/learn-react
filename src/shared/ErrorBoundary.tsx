import React from "react";
import {ErrorState} from "../models/models";

class ErrorBoundary extends React.Component<{}, ErrorState> {
    constructor(state: boolean) {
        super(state);
        this.state = {
            hasError: false
        };
    }

    componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
        this.setState({hasError: true});
    }

    render() {
        return (this.state.hasError) ?
            (<h1 className='tc'>This is Whack</h1>)
            : (this.props.children)
    }
}

export default ErrorBoundary;
