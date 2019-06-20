import React, { Component } from 'react'

const EnhanceCounter = (ActualComponent) => {
    class EnhanceCounter extends Component {
        state = {
            count: 0,
        }

        handleClick = () => {
            const { count } = this.state;
            this.setState({
                count: count+1,
            })
        }
        render() {
            const { count } = this.state;
            return (
                <div>
                    <ActualComponent handleClick={this.handleClick} count={count}/>
                </div>
            )
        }
    }
    return EnhanceCounter;
}

export default EnhanceCounter
