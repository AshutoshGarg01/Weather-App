async function fetchData(city) {
    const url = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+city;
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '0aa8af71cdmshb87dd617a11dc53p16e5c5jsn25754908cc18',
            'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
        }
    };

    const response = await fetch(url, options);
    const result = await response.json();
    cityName.innerHTML = city
    console.log(result);
    //cloud_pct.innerHTML = result.cloud_pct
    feels_like.innerHTML = result.feels_like
    humidity.innerHTML = result.humidity
    humidity2.innerHTML = result.humidity
    max_temp.innerHTML = result.max_temp
    min_temp.innerHTML = result.min_temp
    sunrise.innerHTML = result.sunrise
    sunset.innerHTML = result.sunset
    temp.innerHTML = result.temp
    temp2.innerHTML = result.temp
    wind_degrees.innerHTML = result.wind_degrees
    wind_speed.innerHTML = result.wind_speed
    wind_speed2.innerHTML = result.wind_speed


     

    //Chandigarh
    chfeels_like.innerHTML = result.feels_like
    chhumidity.innerHTML = result.humidity
    chmax_temp.innerHTML = result.max_temp
    chmin_temp.innerHTML = result.min_temp
    chsunrise.innerHTML = result.sunrise
    chsunset.innerHTML = result.sunset
    chtemp.innerHTML = result.temp
    chwind_degrees.innerHTML = result.wind_degrees
    chwind_speed.innerHTML = result.wind_speed
    
    //himachal pradesh
    hpfeels_like.innerHTML = result.feels_like
    hphumidity.innerHTML = result.humidity
    hpmax_temp.innerHTML = result.max_temp
    hpmin_temp.innerHTML = result.min_temp
    hpsunrise.innerHTML = result.sunrise
    hpsunset.innerHTML = result.sunset
    hptemp.innerHTML = result.temp
    hpwind_degrees.innerHTML = result.wind_degrees
    hpwind_speed.innerHTML = result.wind_speed

  //chennai
    chennaifeels_like.innerHTML = result.feels_like
    chennaihumidity.innerHTML = result.humidity
    chennaimax_temp.innerHTML = result.max_temp
    chennaimin_temp.innerHTML = result.min_temp
    chennaisunrise.innerHTML = result.sunrise
    chennaisunset.innerHTML = result.sunset
    chennaitemp.innerHTML = result.temp
    chennaiwind_degrees.innerHTML = result.wind_degrees
    chennaiwind_speed.innerHTML = result.wind_speed

     //uttar pradesh
    uttpfeels_like.innerHTML = result.feels_like
    uttphumidity.innerHTML = result.humidity
    uttpmax_temp.innerHTML = result.max_temp
    uttpmin_temp.innerHTML = result.min_temp
    uttpsunrise.innerHTML = result.sunrise
    uttpsunset.innerHTML = result.sunset
    uttptemp.innerHTML = result.temp
    uttpwind_degrees.innerHTML = result.wind_degrees
    uttpwind_speed.innerHTML = result.wind_speed
    
}

submit.addEventListener("click", (e)=>{
    e.preventDefault()
    fetchData(city.value)
})

fetchData("Delhi");

async function fill_table(){
    const url = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=West Bengal';
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '0aa8af71cdmshb87dd617a11dc53p16e5c5jsn25754908cc18',
            'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
        }
    };

    const response = await fetch(url, options);
    const result = await response.json();
    console.log(result);
    wbfeels_like.innerHTML = result.feels_like
    wbhumidity.innerHTML = result.humidity
    wbmax_temp.innerHTML = result.max_temp
    wbmin_temp.innerHTML = result.min_temp
    wbsunrise.innerHTML = result.sunrise
    wbsunset.innerHTML = result.sunset
    wbtemp.innerHTML = result.temp
    wbwind_degrees.innerHTML = result.wind_degrees
    wbwind_speed.innerHTML = result.wind_speed
}