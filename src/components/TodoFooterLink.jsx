import React from 'react';
import PropTypes from 'prop-types';


class TodoFooterlink extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(event) {
        event.preventDefault();
        this.props.onClick();
    }
    render() {
        return (
            <button style={{ marginLeft: '30px' }} onClick={this.handleClick}>
                {this.props.label}
            </button>
        );
    }
}

TodoFooterlink.propTypes = {
    label: PropTypes.string.isRequired
}

export default TodoFooterlink;