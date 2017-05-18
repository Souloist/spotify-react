import React from "react";

const AlbumList = (props) => {
    const albums = props.albums.map(album => (
        <li>
            <img src={album.images[1].url} alt={album.name} />
        </li>
    ));

    return (
        <ul>
            {albums}
        </ul>
    );
};

AlbumList.propTypes = {
    albums: React.PropTypes.arrayOf(React.PropTypes.shape({
        name: React.PropTypes.string.isRequired,
        images: React.PropTypes.array.isRequired,
        }),
    ).isRequired,
};

export default AlbumList;
