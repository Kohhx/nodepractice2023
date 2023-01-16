const request = require("request");
const axios = require("axios");
require("dotenv").config();

const geocode = (address) => {
  const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${address}.json?access_token=${process.env.MAPBOX_API}&limit=1`;

  return axios(url).then((res) => {
    return {
      latitude: res.data.features[0].center[1],
      longitude: res.data.features[0].center[0],
      location: res.data.features[0].place_name,
    };
  });
};

module.exports = geocode;
