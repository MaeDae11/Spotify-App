import { CLIENT_ID, SECRET, REDIRECT_URI } from './SpotifyInfo.js';


let accessToken = '';

const Spotify = {
    getAccessToken(){
        if(accessToken === true){
            return new Promise(resolve => {
                resolve(accessToken)
            });
        }
        return fetch(`https://cors-anywhere.herokuapp.com/GET https://accounts.spotify.com/authorize/?client_id=${CLIENT_ID}&response_type=code&redirect_uri=${REDIRECT_URI}%2Fcallback&scope=user-read-private%20user-read-email&state=34fFs29kd09`)
        .then(response => {
            if(response.ok){
                console.log(response)
                return response.json();
            }
            throw new Error('Request failed!');
        }, networkError => console.log(networkError.message)
        ).then(jsonResponse => {
            console.log(jsonResponse)
            accessToken = jsonResponse.access_token;
            return accessToken
        });
    },
    search(term) {
        return Spotify.getAccessToken().then(() => {
            return fetch(`https://cors-anywhere.herokuapp.com/`)
        })
    }
};

export default Spotify