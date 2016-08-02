import axios fomr "axios";

/**
 * Fetch takes a request to send, and a callback to pass the response to.
 * The request is passed to the axios get method which returns a promise.
 * Once the promise resolves, we call our callback.
 * Axois stores the resulting payload in the response's data object
 *//

var fetch = function(request, callback) {
    axios.get(request)
        .then(response => {
            callback(response.data);
        });
}

module.exports = {
    fetch: fetch,
};
