import CountryInfo from "./CountryInfo";
import {useState} from "react";
import countries from "./Countries";

const CountryList = ({queryResult}) => {
    const [showInfo, setShowInfo] = useState(false)
    const [selectedCountry, setSelectedCountry] = useState(null);
    const handleButtonClick = (country) => {
        setShowInfo(true)
        setSelectedCountry(country)
    }

    return (
        <>
            {!showInfo &&
                <div>
                    {queryResult.map((country) => {
                        return (
                            <div>
                                {country.name.common}
                                <button onClick={() => {
                                    handleButtonClick(country)
                                }}>show
                                </button>
                            </div>
                        )
                    })}
                </div>
            }
            {showInfo &&
                <div>
                    <CountryInfo country={selectedCountry}/>
                    {/*{setShowInfo(!showInfo)}*/}
                </div>
            }
        </>
    )
}

export default CountryList