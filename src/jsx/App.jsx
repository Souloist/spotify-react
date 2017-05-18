import React from "react";
import ReactDOM from "react-dom";

import SearchBar from "./components/SearchBar";
import AlbumList from "./components/AlbumList";
import { getAlbums } from "./utils/SpotifyUtils";

class App extends React.Component {
    constructor() {
        // Required to get access to this
        super();
        this.state = ({
            albums: [],
        });
        this.getAlbums = this.getAlbums.bind(this);
        this.processAlbums = this.processAlbums.bind(this);
    }

    getAlbums(artist) {
        getAlbums(artist, this.processAlbums);
    }

    processAlbums(payload) {
        this.setState({
            albums: payload.albums.items,
        });
    }

    render() {
        return (
            <div>
                <SearchBar getAlbums={this.getAlbums} />
                <AlbumList albums={this.state.albums} />
            </div>
        );
    }
}

ReactDOM.render(
    <App />,
    document.getElementById("app"),
);
