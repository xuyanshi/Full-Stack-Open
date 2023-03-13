import Languages from "./Languages";

const CountryInfo = ({queryResult}) => {
    const country = queryResult[0]
    return (
        <div>
            <h2>{country.name.common}</h2>
            <div>capital {country.capital}</div>
            <div>area {country.area}</div>
            <h3>languages: </h3>
            <Languages country={country}/>
            <img src={country.flags.png} alt={"flag of " + country.name.common}/>
        </div>
    )
}

export default CountryInfo