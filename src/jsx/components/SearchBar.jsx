import React from "react";

class SearchBar extends React.Component {
    constructor(props) {
        // super() must be called when child constructor is declared
        // otherwise, this will be undefined
        super(props);
        this.state = {
            searchQuery: "",
        };
        // binding this to event handler so this will contain props
        // and setState method
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange(e) {
        this.setState({
            searchQuery: e.target.value,
        });
    }

    render() {
        return <input onChange={this.handleInputChange} />;
    }
}

export default SearchBar;
