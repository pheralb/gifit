import { API_KEY } from "./settings";

const fromApiResponseToGifs = (apiResponse) => {
  const { data = [] } = apiResponse;
  return data;
};

export function getTrendingGifs({limit= 5}) {
  const apiURL = `https://api.giphy.com/v1/gifs/trending?api_key=${API_KEY}&limit=${limit}`;

  return fetch(apiURL)
    .then((res) => res.json())
    .then(fromApiResponseToGifs);
}
