const express = require('express');
const router = express.Router();
  const got = require('got');

  const KEY = process.env.WEATHER_KEY;

router.get('/weather', async (req, res, next)=>{
    try {

        const {lat, lon} = req.query;
        if(!lat) {
return res.status(400).json({massage: 'not lat'})
        }
        if(!lon) {
        return    res.status(400).json({massage: 'not lat'})
        }
        console.log(await req.query);
        const {data}=  await got('http://api.weatherbit.io/v2.0/current', {
            searchParams: {
                key: KEY,
                lat:lat,
                lon:lon
               
            }
        }).json();
        const {city_name, temp}= data[0]
            res.json({ city_name, temp});
    } 
    catch (err) {
console.log(err);
    }

   
})

module.exports = {router};