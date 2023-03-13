import Languages from "./Languages";
import axios from "axios";
import {useEffect, useState} from "react";

const CountryInfo = ({country}) => {
    const api_key = process.env.REACT_APP_API_KEY
    const [weather, setWeather] = useState(null)
    useEffect(() => {
        axios.get(`https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&exclude=${part}&appid=${API key}`)
            .then(response => {
                setWeather(response.data)
            })
    }, [])
    return (
        <div>
            <h2>{country.name.common}</h2>
            <div>capital {country.capital}</div>
            <div>area {country.area}</div>
            <h3>languages: </h3>
            <Languages country={country}/>
            <img src={country.flags.png} alt={"flag of " + country.name.common}/>
            <h3>Weather in {country.capital}</h3>

        </div>
    )
}

export default CountryInfo