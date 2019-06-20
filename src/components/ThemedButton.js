import React, { Component } from 'react';
import ThemeContext from './ThemeProvider';
import EnhanceCounter from './HOC/EnhanceCounter';

class ThemedButton extends Component {
    static contextType = ThemeContext;

    render() {
        const { count, handleClick } = this.props;
    return (
        <ThemeContext.Consumer>
            {(context) => {
                return (
                    <button 
                        style={{
                            background: context.backgroundColor,
                            color: context.color,
                            margin: '20px',
                        }}
                        onClick={handleClick}
                    >
                        {context.title} 
                        <div>
                            Clicked { count } times
                        </div>
                    </button>
                )
            }}
        </ThemeContext.Consumer>
    );
  }
}

export default EnhanceCounter(ThemedButton);