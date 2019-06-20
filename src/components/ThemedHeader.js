import React, { Component, Fragment } from 'react';
import ThemedButton from './ThemedButton';
import ForwardRefButton from './ForwardRefButton';
import EnhanceCounter from './HOC/EnhanceCounter';

class ThemedHeader extends Component {
    constructor(props) {
        super(props);
        this.buttonRef = React.createRef();
    }
    render() {
        const { handleClick, count } = this.props;
    return (
        <Fragment>
            <h2>Themed Components </h2>
            <ThemedButton />
            <ForwardRefButton ref={this.buttonRef} handleClick={handleClick}>
                <h3>Forward Ref API
                    <span>Button</span>
                </h3>
                <h5>Clicked { count } Times !</h5>
            </ForwardRefButton>
        </Fragment>
    );
  }
}

export default EnhanceCounter(ThemedHeader);
