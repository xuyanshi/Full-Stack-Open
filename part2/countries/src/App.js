import {useEffect, useState} from 'react'
import axios from "axios";
import Countries from './components/Countries'


const App = () => {
    const [countries, setCountries] = useState([])

    useEffect(() => {
        axios.get('http://localhost:3001/countries')
            .then(response => {
                setCountries(response.data)
            })
    }, [])

    // useEffect(() => {
    //     axios.get('https://restcountries.com/v3.1/all')
    //         .then(response => {
    //             setCountries(response.data)
    //         })
    // }, [])
    const [newQuery, setNewQuery] = useState('')

    const handleQueryChange = (event) => {
        setNewQuery(event.target.value.toLowerCase())
    }

    return (
        <div>
            <form>
                <div>find countries <input value={newQuery} onChange={handleQueryChange}/></div>
            </form>
            <Countries countries={countries} query={newQuery}/>
        </div>
    )
}

export default App