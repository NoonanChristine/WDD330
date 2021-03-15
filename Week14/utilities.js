// fetch request using the url argument that is get passed in and returns the response in JSON
export function getJSON(url) {
    return fetch(url)
        .then(function(response) {
            if (!response.ok) {
                throw Error(response.statusText);
            } else {
                return response.json();
            }
        })
        .catch(function(error) {
            console.log(error);
        });
}

//NEED TO FIX THIS ONE
export const getData = function(options) {
    return new Promise(function(resolve, reject) {
    });
};