import CountryInfo from "./CountryInfo";
import {useState} from "react";
import countries from "./Countries";

const CountryList = ({queryResult}) => {
    const [showInfo, setShowInfo] = useState(false)

    return (
        <>
            {showInfo &&
                <div>
                    {queryResult.map((country) => {
                        return (
                            <div>
                                {country.name.common}
                                <button onClick={() => {
                                    setShowInfo(!showInfo)
                                    //How can I clear this page and generate a new html page?
                                }}>
                                    show
                                </button>
                            </div>
                        )
                    })}
                </div>
            }
            {!showInfo &&
                <div>
                    <CountryInfo country={queryResult[0]}/>
                    {setShowInfo(!showInfo)}
                </div>
            }
        </>
    )
}

export default CountryList