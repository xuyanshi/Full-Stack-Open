import CountryInfo from "./CountryInfo";
import {useState} from "react";

const CountryList = ({queryResult}) => {
    const [showInfo, setShowInfo] = useState(false)

    return (
        <>
            <div>
                {queryResult.map((country) => {
                    return (
                        <div>
                            {country.name.common}
                            <button onClick={() => setShowInfo(!showInfo)}>
                                show
                            </button>
                        </div>
                    )
                })}
            </div>

        </>
    )
}

export default CountryList