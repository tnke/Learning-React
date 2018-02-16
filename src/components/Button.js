import React, { Component } from 'react';

class Button extends Component
{
    render()
    {
        return (
            <button value={this.props.value} onClick={this.props.clickHandler}>{this.props.text}</button>
        );
    }
}

export default Button;