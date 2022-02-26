require('dotenv').config()


async function getHike() {
    const apiKey = process.env.REACT_APP_APIKEY
    console.log(apiKey);
    const response = await fetch(`https://developer.nps.gov/api/v1/parks?parkCode=acad&api_key=${apiKey}`);
    const results = await response.json();
    return results;
}

module.exports = { getHike };