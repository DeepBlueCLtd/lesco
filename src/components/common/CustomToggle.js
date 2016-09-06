import React, {Component} from 'react';
import {  Glyphicon} from 'react-bootstrap';


export default class CustomToggle extends Component {
    constructor(props, context) {
        super(props, context);

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e) {
        e.preventDefault();

        this.props.onClick(e);
    }

    render() {
        return (
            <Glyphicon glyph="cog" onClick={this.handleClick} />
        );
    }
}