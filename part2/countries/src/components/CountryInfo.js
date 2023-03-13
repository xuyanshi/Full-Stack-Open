const CountryInfo = ({queryResult}) => {
    console.log(queryResult)
    const country = queryResult[0]
    console.log(country)
    return (
        <div>
            <h2>{country.name.common}</h2>
            <div>capital {country.capital}</div>
            <div>area {country.area}</div>
        </div>
    )
}

export default CountryInfo