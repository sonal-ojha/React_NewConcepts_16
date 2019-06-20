import React from 'react'

const ForwardRefButton = React.forwardRef((props, ref) => (
    <button ref={ref} onClick={props.handleClick}>
        {props.children}
    </button>
));

export default ForwardRefButton;