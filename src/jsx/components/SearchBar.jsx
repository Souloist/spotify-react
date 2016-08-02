import React from "react";

class SearchBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            searchQuery: "",
        };
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
