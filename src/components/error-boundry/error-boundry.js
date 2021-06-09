import { Component } from 'react';
import ErrorIndicator from '../error-indicator';

export default class ErrorBoundry extends Component {
    state = {
        isErrorExist: false
    };

    componentDidCatch = () => {
        this.setState({
            isErrorExist: true
        });
    };

    render(){
        if(this.state.isErrorExist)
            return <ErrorIndicator/>;
        
        return this.props.children; 
    }
}