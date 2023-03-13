import {useEffect, useState} from 'react'
import axios from "axios";
import Countries from './components/Countries'


const App = () => {
    const [countries, setCountries] = useState([
        {
            name: {
                common: "Liechtenstein",
                official: "Principality of Liechtenstein",
                nativeName: {
                    deu: {
                        official: "Fürstentum Liechtenstein",
                        common: "Liechtenstein"
                    }
                }
            },
            tld: [
                ".li"
            ],
            cca2: "LI",
            ccn3: "438",
            cca3: "LIE",
            cioc: "LIE",
            independent: true,
            status: "officially-assigned",
            unMember: true,
            currencies: {
                CHF: {
                    name: "Swiss franc",
                    symbol: "Fr"
                }
            },
            idd: {
                root: "+4",
                suffixes: [
                    "23"
                ]
            },
            capital: [
                "Vaduz"
            ],
            altSpellings: [
                "LI",
                "Principality of Liechtenstein",
                "Fürstentum Liechtenstein"
            ],
            region: "Europe",
            subregion: "Western Europe",
            languages: {
                deu: "German"
            },
            translations: {
                ara: {
                    official: "إمارة ليختنشتاين",
                    common: "ليختنشتاين"
                },
                bre: {
                    official: "Priñselezh Liechtenstein",
                    common: "Liechtenstein"
                },
                ces: {
                    official: "Knížectví Lichtenštejnské",
                    common: "Lichtenštejnsko"
                },
                cym: {
                    official: "Principality of Liechtenstein",
                    common: "Liechtenstein"
                },
                deu: {
                    official: "Fürstentum Liechtenstein",
                    common: "Liechtenstein"
                },
                est: {
                    official: "Liechtensteini Vürstiriik",
                    common: "Liechtenstein"
                },
                fin: {
                    official: "Liechensteinin ruhtinaskunta",
                    common: "Liechenstein"
                },
                fra: {
                    official: "Principauté du Liechtenstein",
                    common: "Liechtenstein"
                },
                hrv: {
                    official: "Kneževina Lihtenštajn",
                    common: "Lihtenštajn"
                },
                hun: {
                    official: "Liechtensteini Hercegség",
                    common: "Liechtenstein"
                },
                ita: {
                    official: "Principato del Liechtenstein",
                    common: "Liechtenstein"
                },
                jpn: {
                    official: "リヒテンシュタイン公国",
                    common: "リヒテンシュタイン"
                },
                kor: {
                    official: "리히텐슈타인 공국",
                    common: "리히텐슈타인"
                },
                nld: {
                    official: "Vorstendom Liechtenstein",
                    common: "Liechtenstein"
                },
                per: {
                    official: "شاهزاده‌نشین لیختن‌اشتاین",
                    common: "لیختن‌اشتاین"
                },
                pol: {
                    official: "Księstwo Liechtensteinu",
                    common: "Liechtenstein"
                },
                por: {
                    official: "Principado de Liechtenstein",
                    common: "Liechtenstein"
                },
                rus: {
                    official: "Княжество Лихтенштейн",
                    common: "Лихтенштейн"
                },
                slk: {
                    official: "Lichtenštajnské kniežatstvo",
                    common: "Lichtenštajnsko"
                },
                spa: {
                    official: "Principado de Liechtenstein",
                    common: "Liechtenstein"
                },
                srp: {
                    official: "Кнежевина Лихтенштајн",
                    common: "Лихтенштајн"
                },
                swe: {
                    official: "Furstendömet Liechtenstein",
                    common: "Liechtenstein"
                },
                tur: {
                    official: "Lihtenştayn Prensliği",
                    common: "Lihtenştayn"
                },
                urd: {
                    official: "امارات لیختینستائن",
                    common: "لیختینستائن"
                },
                zho: {
                    official: "列支敦士登公国",
                    common: "列支敦士登"
                }
            },
            latlng: [
                47.26666666,
                9.53333333
            ],
            landlocked: true,
            borders: [
                "AUT",
                "CHE"
            ],
            area: 160,
            demonyms: {
                eng: {
                    f: "Liechtensteiner",
                    m: "Liechtensteiner"
                },
                fra: {
                    f: "Liechtensteinoise",
                    m: "Liechtensteinois"
                }
            },
            flag: "🇱🇮",
            maps: {
                googleMaps: "https://goo.gl/maps/KNuHeiJzAPodwM7y6",
                openStreetMaps: "https://www.openstreetmap.org/relation/1155955"
            },
            population: 38137,
            fifa: "LIE",
            car: {
                signs: [
                    "FL"
                ],
                side: "right"
            },
            timezones: [
                "UTC+01:00"
            ],
            continents: [
                "Europe"
            ],
            flags: {
                png: "https://flagcdn.com/w320/li.png",
                svg: "https://flagcdn.com/li.svg",
                alt: "The flag of Liechtenstein is composed of two equal horizontal bands of blue and red, with a golden-yellow crown on the hoist side of the blue band."
            },
            coatOfArms: {
                png: "https://mainfacts.com/media/images/coats_of_arms/li.png",
                svg: "https://mainfacts.com/media/images/coats_of_arms/li.svg"
            },
            startOfWeek: "monday",
            capitalInfo: {
                latlng: [
                    47.13,
                    9.52
                ]
            },
            postalCode: {
                format: "####",
                regex: "^(\d{4})$"
            }
        },
    ])

    // useEffect(() => {
    //     axios.get('https://restcountries.com/v3.1/all')
    //         .then(response => {
    //             setCountries(response.data)
    //         })
    // }, [])

    const [newQuery, setNewQuery] = useState('')

    const handleQueryChange = (event) => {
        setNewQuery(event.target.value)
    }

    return (
        <div>
            <form>
                <div>find countries <input value={newQuery} onChange={handleQueryChange}/></div>
            </form>
            <Countries countries={countries}/>
        </div>
    )
}

export default App