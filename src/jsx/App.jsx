import React from "react";
import ReactDOM from "react-dom";
import SearchBar from "./components/SearchBar";

class App extends React.component {
    render() {
        return (
            <div>
                <p>Hi</p>
                <SearchBar />
            </div>
        );
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('container')
);
