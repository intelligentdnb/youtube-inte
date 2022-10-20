const axios = require("axios");
const { API_KEY } = require(".././keys.js")


const BASE_URL = "https://youtube-v31.p.rapidapi.com"

const options = {
  params: {
    maxResults: '50'
  },
  headers: {
    'X-RapidAPI-Key': API_KEY,
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
  }
};


export const fetchFromAPI = async (url) => {
   const {data} = await axios.get(`${BASE_URL}/${url}`, options);

   return data;
}

