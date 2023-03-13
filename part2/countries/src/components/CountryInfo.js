const CountryInfo = ({queryResult}) => {
    const country = queryResult[0]


    const getLanguages = () => {
        let countryLanguages = country.languages
        let html = ""
        for (const lang in countryLanguages) {
            html.concat(getLang(lang))
        }
        console.log("html", html)
        return html
    }

    const getLang = (language) => {
        return (
            <li>{language}</li>
        )
    }
    return (
        <div>
            <h2>{country.name.common}</h2>
            <div>capital {country.capital}</div>
            <div>area {country.area}</div>
            <h3>languages: </h3>
            <ul>
                {getLanguages()}
            </ul>
            <img src={country.flags.png} alt={"flag of " + country.name.common}/>
        </div>
    )
}

export default CountryInfo