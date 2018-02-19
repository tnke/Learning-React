import React, { Component } from 'react';

class Button extends Component
{
    render()
    {
        let classes;

        if (this.props.active) {
            classes = 'is-active ';
        }

        return (
            <button className={classes} value={this.props.value} onClick={this.props.onClick}>{this.props.text}</button>
        );
    }
}

export default Button;