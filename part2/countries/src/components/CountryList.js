import CountryInfo from "./CountryInfo";

const CountryList = ({queryResult}) => {
    return (
        <>
            <div>
                {queryResult.map((country) => {
                    return (
                        <p>{country.name.common}</p>
                    )
                })}
            </div>
            <button onClick={}/>
        </>
    )
}

export default CountryList