import {useState} from "react";

const Countries = ({countries, query}) => {
    const [queryResult, setQueryResult] = useState([])

    for (let i = 0; i < countries.length; i++) {
        let country = countries[i]
        if (country.name.common.indexOf(query) !== -1) {
            setQueryResult(queryResult.concat(country))
        }
    }

    return (
        <>
            Too many matches
        </>
    )
}

export default Countries