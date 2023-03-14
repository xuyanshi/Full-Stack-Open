import {useState, useEffect} from 'react'
import Filter from "./components/Filter";
import Persons from "./components/Persons";
import PersonForm from "./components/PersonForm";
import Notification from "./components/Notification";
import personService from "./services/person";

const App = () => {
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
    const [errorMessage, setErrorMessage] = useState(null)
    const [successMessage, setSuccessMessage] = useState(null)
    const [alreadyRemoved, setAlreadyRemoved] = useState(false)
    const addNewPerson = (event) => {
        event.preventDefault()
        let findIdx = persons.findIndex((p) => {
            return newName === p.name
        })
        if (findIdx === -1) { // add
            const personObject = {
                name: newName,
                phone: newPhone,
            }
            personService.create(personObject)
                .then(response => {
                    setSuccessMessage(`Added ${newName}`)
                    setTimeout(() => {
                        setSuccessMessage(null)
                    }, 5000)
                    setPersons(persons.concat(response.data))
                }).catch(error => {
                setErrorMessage(`Fail to add ${newName}`)
                setTimeout(() => {
                    setErrorMessage(null)
                }, 5000)
            })

        } else { // update
            const result = window.confirm(`Sure to Update this person?`)
            if (result) {
                const updatingPerson = {...persons[findIdx], phone: newPhone}
                personService.update(updatingPerson.id, updatingPerson)
                    .then(response => {
                        setSuccessMessage(`Updated ${newName}`)
                        setTimeout(() => {
                            setSuccessMessage(null)
                        }, 5000)
                    }).catch(error => {
                    setErrorMessage(`${newName} has already been removed before`)
                    setAlreadyRemoved(true)
                    setTimeout(() => {
                        setErrorMessage(null)
                    }, 5000)
                })
            }
        }
        setNewName('')
        setNewPhone('')
        setAlreadyRemoved(false)
    }

    const handleDelete = (id) => {
        const result = window.confirm(`Sure to DELETE this person?`)
        if (result) {
            personService.del(id)
                .then(response => {
                    setSuccessMessage(`Deleted ${newName}`)
                    setTimeout(() => {
                        setSuccessMessage(null)
                    }, 5000)
                    setPersons(persons.filter(p => p.id !== id))
                })
                .catch(error => {
                    setErrorMessage(`Fail to delete ${newName}`)
                    setTimeout(() => {
                        setErrorMessage(null)
                    }, 5000)
                })
        }
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
            <Notification errorMessage={errorMessage} successMessage={successMessage}/>
            <Filter newQuery={newQuery} handleQueryChange={handleQueryChange}/>
            <h3>Add a new</h3>
            <PersonForm addNewPerson={addNewPerson} newName={newName} newPhone={newPhone}
                        handleNameChange={handleNameChange} handlePhoneChange={handlePhoneChange}/>
            <h3>Numbers</h3>
            <Persons persons={persons} newQuery={newQuery} handleDelete={handleDelete}/>
        </div>
    )
}

export default App
