const Languages = ({country}) => {
    const countryLanguages = country.languages;

    return (
        <ul>
            {Object.entries(countryLanguages).map(([lang, name]) => (
                <li key={lang}>{name}</li>
            ))}
        </ul>
    )
}

export default Languages