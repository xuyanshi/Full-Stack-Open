import Languages from "./Languages";
import axios from "axios";
import {useEffect, useState} from "react";

const CountryInfo = ({country}) => {
    const api_key = process.env.REACT_APP_API_KEY
    const [weather, setWeather] = useState({
        "coord": {"lon": -0.13, "lat": 51.51},
        "weather": [{"id": 300, "main": "Drizzle", "description": "light intensity drizzle", "icon": "09d"}],
        "base": "stations",
        "main": {"temp": 280.32, "pressure": 1012, "humidity": 81, "temp_min": 279.15, "temp_max": 281.15},
        "visibility": 10000,
        "wind": {"speed": 4.1, "deg": 80},
        "clouds": {"all": 90},
        "dt": 1485789600,
        "sys": {"type": 1, "id": 5091, "message": 0.0103, "country": "GB", "sunrise": 1485762037, "sunset": 1485794875},
        "id": 2643743,
        "name": "London",
        "cod": 200
    })

    // useEffect(() => {
    //     axios.get(`https://api.openweathermap.org/data/3.0/onecall?lat=${country.capitalInfo.latlng[0]}&lon=${country.capitalInfo.latlng[1]}&appid=${api_key}`)
    //         .then(response => {
    //             setWeather(response.data)
    //         })
    // }, [])

    return (
        <div>
            <h2>{country.name.common}</h2>
            <div>capital {country.capital}</div>
            <div>area {country.area}</div>
            <h3>languages: </h3>
            <Languages country={country}/>
            <img src={country.flags.png} alt={"flag of " + country.name.common}/>
            <h3>Weather in {country.capital}</h3>
            <div>Temperature {(weather.main.temp - 273.15).toFixed(2)} Celsius</div>

            <div>wind {weather.wind.speed.toFixed(2)} m/s</div>
        </div>
    )
}

export default CountryInfo