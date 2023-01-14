const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': 'b72e7d9cacmsh33cd8e9bb6153c2p115dbejsn429f689184c8',
        'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
    }
};

const getWeather = (city)=>{
    cityName.innerHTML=city;
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+city, options)
    .then(response => response.json())
    .then(response => {
        
        console.log(response)
        
        cloud_pct.innerHTML = response.cloud_pct
        temp.innerHTML = response.temp
        temp1.innerHTML = response.temp
        feels_like.innerHTML = response.feels_like
        humidity.innerHTML = response.humidity
        humidity1.innerHTML = response.humidity
        min_temp.innerHTML = response.min_temp
        max_temp.innerHTML = response.max_temp
        wind_speed.innerHTML = response.wind_speed
        ws.innerHTML = response.wind_speed
        sunrise.innerHTML = response.sunrise
        sunset.innerHTML = response.sunset
    })
    .catch(err => console.error(err));
}
submit.addEventListener("click",(e)=>{
    e.preventDefault()
    getWeather(city.value)
})

getWeather("Delhi");


fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=patna', options)
    .then(response => response.json())
    .then(response => {
        
        console.log(response)
        
        temp_patna.innerHTML = response.temp
        min_temp_patna.innerHTML = response.min_temp
        max_temp_patna.innerHTML = response.max_temp
        cloud_pct_patna.innerHTML = response.cloud_pct
        feels_like_patna.innerHTML = response.feels_like
        humidity_patna.innerHTML = response.humidity
        wind_speed_patna.innerHTML = response.wind_speed
        sunrise_patna.innerHTML = response.sunrise
        sunset_patna.innerHTML = response.sunset
    })
    .catch(err => console.error(err));

    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=ranchi', options)
    .then(response => response.json())
    .then(response => {
        
        console.log(response)
        
        temp_ranchi.innerHTML = response.temp
        min_temp_ranchi.innerHTML = response.min_temp
        max_temp_ranchi.innerHTML = response.max_temp
        cloud_pct_ranchi.innerHTML = response.cloud_pct
        feels_like_ranchi.innerHTML = response.feels_like
        humidity_ranchi.innerHTML = response.humidity
        wind_speed_ranchi.innerHTML = response.wind_speed
        sunrise_ranchi.innerHTML = response.sunrise
        sunset_ranchi.innerHTML = response.sunset
    })
    .catch(err => console.error(err));

    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=kolkata', options)
    .then(response => response.json())
    .then(response => {
        
        console.log(response)
        
        temp_kolkata.innerHTML = response.temp
        min_temp_kolkata.innerHTML = response.min_temp
        max_temp_kolkata.innerHTML = response.max_temp
        cloud_pct_kolkata.innerHTML = response.cloud_pct
        feels_like_kolkata.innerHTML = response.feels_like
        humidity_kolkata.innerHTML = response.humidity
        wind_speed_kolkata.innerHTML = response.wind_speed
        sunrise_kolkata.innerHTML = response.sunrise
        sunset_kolkata.innerHTML = response.sunset
    })
    .catch(err => console.error(err));

    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=lucknow', options)
    .then(response => response.json())
    .then(response => {
        
        console.log(response)
        
        temp_lucknow.innerHTML = response.temp
        min_temp_lucknow.innerHTML = response.min_temp
        max_temp_lucknow.innerHTML = response.max_temp
        cloud_pct_lucknow.innerHTML = response.cloud_pct
        feels_like_lucknow.innerHTML = response.feels_like
        humidity_lucknow.innerHTML = response.humidity
        wind_speed_lucknow.innerHTML = response.wind_speed
        sunrise_lucknow.innerHTML = response.sunrise
        sunset_lucknow.innerHTML = response.sunset
    })
    .catch(err => console.error(err));

    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=bhagalpur', options)
    .then(response => response.json())
    .then(response => {
        
        console.log(response)
        
        temp_bgp.innerHTML = response.temp
        min_temp_bgp.innerHTML = response.min_temp
        max_temp_bgp.innerHTML = response.max_temp
        cloud_pct_bgp.innerHTML = response.cloud_pct
        feels_like_bgp.innerHTML = response.feels_like
        humidity_bgp.innerHTML = response.humidity
        wind_speed_bgp.innerHTML = response.wind_speed
        sunrise_bgp.innerHTML = response.sunrise
        sunset_bgp.innerHTML = response.sunset
    })
    .catch(err => console.error(err));

    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=purnia', options)
    .then(response => response.json())
    .then(response => {
        
        console.log(response)
        
        temp_purnia.innerHTML = response.temp
        min_temp_purnia.innerHTML = response.min_temp
        max_temp_purnia.innerHTML = response.max_temp
        cloud_pct_purnia.innerHTML = response.cloud_pct
        feels_like_purnia.innerHTML = response.feels_like
        humidity_purnia.innerHTML = response.humidity
        wind_speed_purnia.innerHTML = response.wind_speed
        sunrise_purnia.innerHTML = response.sunrise
        sunset_purnia.innerHTML = response.sunset
    })
    .catch(err => console.error(err));