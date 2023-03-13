import Languages from "./Languages";

const CountryInfo = ({country}) => {
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