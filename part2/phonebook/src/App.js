import {useState, useEffect} from 'react'
import axios from "axios";
import Filter from "./components/Filter";
import Persons from "./components/Persons";
import PersonForm from "./components/PersonForm";
import personService from "./services/person";

const App = () => {
    // const [persons, setPersons] = useState([
    //     {name: 'Arto Hellas', number: '040-123456', id: 1},
    //     {name: 'Ada Lovelace', number: '39-44-5323523', id: 2},
    //     {name: 'Dan Abramov', number: '12-43-234345', id: 3},
    //     {name: 'Mary Poppendieck', number: '39-23-6423122', id: 4}
    // ])
    const [persons, setPersons] = useState([])
    useEffect(() => {
        personService.getAll()
            .then(response => {
                setPersons(response.data)
            })
    }, [])

    const [newName, setNewName] = useState('')
    const [newPhone, setNewPhone] = useState('')
    const [newQuery, setNewQuery] = useState('')

    const addNewPerson = (event) => {
        event.preventDefault()
        let findIdx = persons.findIndex((p) => {
            return newName === p.name
        })
        if (findIdx === -1) {
            const personObject = {
                name: newName,
                phone: newPhone,
            }
            personService.create(personObject)
                .then(response => {
                    setPersons(persons.concat(response.data))
                })

        } else {
            alert(`${newName} is already added to phonebook`)
        }
        setNewName('')
        setNewPhone('')
    }

    const handleNameChange = (event) => {
        setNewName(event.target.value)
    }
    const handlePhoneChange = (event) => {
        setNewPhone(event.target.value)
    }

    const handleQueryChange = (event) => {
        setNewQuery(event.target.value)
    }

    return (
        <div>
            <h2>Phonebook</h2>
            <Filter newQuery={newQuery} handleQueryChange={handleQueryChange}/>
            <h3>Add a new</h3>
            <PersonForm addNewPerson={addNewPerson} newName={newName} newPhone={newPhone}
                        handleNameChange={handleNameChange} handlePhoneChange={handlePhoneChange}/>
            <h3>Numbers</h3>
            <Persons persons={persons} newQuery={newQuery}/>
        </div>
    )
}

export default App
