import {API_KEY, API_URL} from './settings';

const fromApiResponseToGifs = apiResponse => {
    const {data = []} = apiResponse;
    return data
}

export function getTrendingGifs() {

    const apiURL=`https://api.giphy.com/v1/gifs/trending?api_key=${API_KEY}`;

   return fetch(apiURL)
    .then(res => res.json())
    .then(fromApiResponseToGifs)
};
