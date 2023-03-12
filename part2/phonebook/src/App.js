import {useState} from 'react'

const Person = ({person}) => {
    return (
        <div>{person.name}</div>
    )
}

const App = () => {
    const [persons, setPersons] = useState([
        {name: 'Arto Hellas'}
    ])
    const [newName, setNewName] = useState('')

    const addNewName = (event) => {
        event.preventDefault()
    }

    const handleNameChange = (event) => {

    }

    return (
        <div>
            <h2>Phonebook</h2>
            <form onSubmit={addNewName}>
                <div>
                    name: <input value={newName} onChange={handleNameChange}/>
                </div>
                <div>
                    <button type="submit">add</button>
                </div>
            </form>
            <h2>Numbers</h2>
            <div>
                {persons.map(person =>
                    <Person key={person} person={person}/>
                )}
            </div>
        </div>
    )
}

export default App