import axios from "axios";

/**
 * Fetch takes a request to send, and a callback to pass the response to.
 * The request is passed to the axios get method which returns a promise.
 * Once the promise resolves, we call our callback.
 * Axois stores the resulting payload in the response's data object
 */

export function fetch(request, callback) {
        axios.get(request)
            .then(response => {
                callback(response.data);
            });
}
