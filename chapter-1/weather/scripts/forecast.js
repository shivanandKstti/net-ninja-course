const key = 'mrpGwrdZR8AIEE9yQAYedofYyfpAmPiG';

const getWether = async(locatioonKey) => {

        const base = 'http://dataservice.accuweather.com/currentconditions/v1/';
        const query = `${locatioonKey}?apikey=${key}`;
        const response = await fetch(base + query);
        const data = await response.json();

        // console.log(data)
        return data[0];
    }
    // get city info
const getCity = async(city) => {
    const base = 'http://dataservice.accuweather.com/locations/v1/cities/search';
    const query = `?apikey=${key}&q=${city}`;
    const response = await fetch(base + query);
    const data = await response.json();

    return data[0];
}

// getCity('bengaluru')
//     .then(data => {
//         // console.log(data.Key);
//         return getWether(data.Key);
//     }).then(data => {
//         console.log(data)
//     })
//     .catch(err => console.log(err))

// getWether("204108");