import {useEffect, useState} from "react";
import CountryList from "./CountryList";
import CountryInfo from "./CountryInfo";

const Countries = ({countries, query}) => {
    const [queryResult, setQueryResult] = useState([])

    let resultCountries = []
    for (let i = 0; i < countries.length; i++) {
        let country = countries[i]
        let countryName = country.name.common
        if (query === "" || countryName.indexOf(query) !== -1) {
            resultCountries = resultCountries.concat(country)
        }
    }
    useEffect(() => {
        setQueryResult(resultCountries)
    }, [])

    if (queryResult.length > 10) {
        return (
            <>
                Too many matches
            </>
        )
    } else if (queryResult.length > 1 && queryResult < 10) {
        return (
            <CountryList queryResult={queryResult}/>
        )
    } else if (queryResult.length === 1) {
        return (
            <CountryInfo queryResult={queryResult}/>
        )
    } else {
        return (
            <div>No matches</div>
        )
    }
}

export default Countries