import {useState} from 'react'

const Person = ({person}) => {
    return (
        <div>{person.name}</div>
    )
}

const App = () => {
    const [persons, setPersons] = useState([
        {name: 'Arto Hellas', phone: '040-1234567'}
    ])
    const [newName, setNewName] = useState('')
    const [newPhone, setNewPhone] = useState('')
    const addNewPerson = (event) => {
        event.preventDefault()
        let findIdx = persons.findIndex((p) => {
            return newName === p.name
        })
        if (findIdx === -1) {
            setPersons(persons.concat({
                name: newName,
                phone: newPhone
            }))
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
    
    return (
        <div>
            <h2>Phonebook</h2>
            <form onSubmit={addNewPerson}>
                <div>
                    name: <input value={newName} onChange={handleNameChange}/>
                </div>
                <div>number: <input value={newPhone} onChange={handlePhoneChange}/></div>
                <div>
                    <button type="submit">add</button>
                </div>
            </form>
            <h2>Numbers</h2>
            <div>
                {persons.map(person =>
                    // Warning: Keys should be unique so that components maintain their identity across updates.
                    <Person key={person} person={person}/>
                )}
            </div>
        </div>
    )
}

export default App