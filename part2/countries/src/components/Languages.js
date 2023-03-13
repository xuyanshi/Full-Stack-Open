const getLanguages = ({country}) => {
    let countryLanguages = country.languages
    for (const lang in countryLanguages) {
        return (
            <li>{countryLanguages[lang]}</li>
        )
    }
}

const Languages = ({country}) => {
    return (
        <ul>
            {getLanguages({country})}
        </ul>
    )
}

export default Languages