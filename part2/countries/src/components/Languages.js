const Languages = ({country}) => {
    const countryLanguages = country.languages;

    return (
        <ul>
            {countryLanguages.map(([lang, name]) => (
                <li key={lang}>{name}</li>
            ))}
        </ul>
    )
}

export default Languages