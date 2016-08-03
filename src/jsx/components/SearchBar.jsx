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
        this.handleKeyPress = this.handleKeyPress.bind(this);
    }

    handleInputChange(e) {
        this.setState({
            searchQuery: e.target.value,
        });
    }

    handleKeyPress(e) {
        if (e.key === "Enter") {
            this.props.getAlbums(this.state.searchQuery);
        }
    }

    render() {
        return <input onChange={this.handleInputChange} onKeyPress={this.handleKeyPress} />;
    }
}

SearchBar.propTypes = {
    getAlbums: React.PropTypes.func.isRequired,
};

export default SearchBar;
