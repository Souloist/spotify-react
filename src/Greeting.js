import React from "react";

const Greeting = React.createClass({

    propTypes: {
        name: React.PropTypes.string
    },

    render() {
        return (
            <div className="greeting">
                <h1>Hello, {this.props.name}!</h1>
            </div>
        );
    }
});

export default Greeting;
