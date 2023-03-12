import {useState} from 'react'

const Person = ({person, query}) => {
    const personName = person.name.toLowerCase()
    query = query.toLowerCase()
    if (query === '' || personName.indexOf(query) !== -1) {
        return (
            <div>{person.name}</div>
        )
    }
}

const App = () => {
    const [persons, setPersons] = useState([
        {name: 'Arto Hellas', number: '040-123456', id: 1},
        {name: 'Ada Lovelace', number: '39-44-5323523', id: 2},
        {name: 'Dan Abramov', number: '12-43-234345', id: 3},
        {name: 'Mary Poppendieck', number: '39-23-6423122', id: 4}
    ])
    const [newName, setNewName] = useState('')
    const [newPhone, setNewPhone] = useState('')
    const [newId, setNewId] = useState(persons.length + 1)
    const [newQuery, setNewQuery] = useState('')

    const addNewPerson = (event) => {
        event.preventDefault()
        let findIdx = persons.findIndex((p) => {
            return newName === p.name
        })
        if (findIdx === -1) {
            setPersons(persons.concat({
                name: newName,
                phone: newPhone,
                id: newId
            }))
        } else {
            alert(`${newName} is already added to phonebook`)
        }
        setNewName('')
        setNewPhone('')
        setNewId(newId + 1)
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
            <form>
                <div>filter shown with <input value={newQuery} onChange={handleQueryChange}/></div>
            </form>
            <form onSubmit={addNewPerson}>
                <div>name: <input value={newName} onChange={handleNameChange}/></div>
                <div>number: <input value={newPhone} onChange={handlePhoneChange}/></div>
                <div>
                    <button type="submit">add</button>
                </div>
            </form>
            <h2>Numbers</h2>
            <div>
                {persons.map(person =>
                    <Person key={person.id} person={person} query={newQuery}/>
                )}
            </div>
        </div>
    )
}

export default App
