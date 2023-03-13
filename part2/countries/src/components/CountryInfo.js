const CountryInfo = ({queryResult}) => {
    const country = queryResult[0]

    let languages = []
    const getLanguages = () => {
        let countryLanguages = country.languages
        for (const lang in countryLanguages) {
            languages = languages.concat(countryLanguages[lang])
        }
    }
    getLanguages()
    
    const getLang = () => {

    }
    return (
        <div>
            <h2>{country.name.common}</h2>
            <div>capital {country.capital}</div>
            <div>area {country.area}</div>
            <h3>languages: </h3>
            <ul>
                <li></li>
            </ul>
            <img src={country.flags.png}/>
        </div>
    )
}

export default CountryInfo