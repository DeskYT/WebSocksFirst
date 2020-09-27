import React, {Component} from 'react';

class Message extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const {message} = this.props;
        return (
            <div>
                {message}
            </div>
        );
    }
}

export default Message;