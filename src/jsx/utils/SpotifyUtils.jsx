import { fetch } from "../networking/Networking";

export function getAlbums(artist, callback) {
    const request = `https://api.spotify.com/v1/search?q=${artist}&type=album`;
    fetch(request, callback);
}

export function getTracks(albumId, callback) {
    const request = `https://api.spotify.com/v1/albums/${albumId}`;
    fetch(request, callback);
}
