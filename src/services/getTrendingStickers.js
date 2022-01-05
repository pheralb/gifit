import { API_KEY } from "./settings";

const fromApiResponseToStickers = (apiResponse) => {
  const { data = [] } = apiResponse;
  return data;
};

export function getTrendingStickers({limit= 5}) {
  const apiURL = `https://api.giphy.com/v1/stickers/trending?api_key=${API_KEY}&limit=${limit}`;

  return fetch(apiURL)
    .then((res) => res.json())
    .then(fromApiResponseToStickers);
}