import Networking from "../networking/Networking";

module.exports = {
    getAlbums: function(artist, callback) {
    const request = "https://api.spotify.com/v1/search?q=${artist}&type=album";
    Networking.fetch(request, callback);
    },

    getTracks: function(albumId, callback) {
    const request = "https://api.spotify.com/v1/albums/${albumId}";
    Networking.fetch(request, callback);
    }
};
