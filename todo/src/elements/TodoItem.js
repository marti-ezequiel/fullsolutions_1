import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class TodoItem extends Component {

    constructor(props) {
        super(props);

        this.state = {

        };

        this.toggle = this.toggle.bind(this);
    }

    toggle() {
        this.props.toggle(this.props.todo);
    }

    getSpanStlyes = () => {
        return { 
            textDecoration: this.props.todo.succeeded ? 'line-through' : '',
            marginLeft: '5px',
            cursor: 'pointer'
        };
    }

    render() {
        return (
            <div> 
                <input type="checkbox" name="success" checked={this.props.todo.succeeded} onChange={this.toggle} />
                <span style={this.getSpanStlyes()} onClick={this.toggle}>{this.props.todo.title} </span>
            </div>
        )
    }
}

TodoItem.propType = {
    todo: PropTypes.object.isRequired
}