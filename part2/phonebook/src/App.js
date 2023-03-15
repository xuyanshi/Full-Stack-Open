import { useState, useEffect } from 'react'

import Persons from './components/Persons'
import PersonForm from './components/PersonForm'
import Filter from './components/Filter'
import Notification from './components/Notification'

import personService from './services/persons'

const App = () => {
  const [persons, setPersons] = useState([]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setFilter] = useState('')
  const [info, setInfo] = useState({ message: null})

  useEffect(() => {
    personService.getAll().then((initialPersons => 
      setPersons(initialPersons)
    ))
  }, [])

  const notifyWith = (message, type='info') => {
    setInfo({
      message, type
    })

    setTimeout(() => {
      setInfo({ message: null} )
    }, 3000)
  }

  const cleanForm = () => {
    setNewName('')
    setNewNumber('') 
  }

  const updatePerson = (person) => {
    const ok = window.confirm(`${newName} is already added to phonebook, replace the number?`)
    if (ok) {
      
      personService.update(person.id, {...person, number: newNumber}).then((updatedPerson) => {
        setPersons(persons.map(p => p.id !== person.id ? p :updatedPerson ))
        notifyWith(`phon number of ${person.name} updated!`)
      })
      .catch(() => {
        notifyWith(`${person.name} has already been removed`, 'error')
        setPersons(persons.filter(p => p.id !== person.id))
      })

      cleanForm()
    }
  }

  const addPerson = (event) => {
    event.preventDefault()
    const person = persons.find(p => p.name === newName)

    if (person) {
      updatePerson(person)
      return
    }

    personService.create({
      name: newName,
      number: newNumber
    }).then(createdPerson => {
      setPersons(persons.concat(createdPerson))

      notifyWith(`${createdPerson.name} added!`)

      cleanForm()
    })
  }

  const removePerson = (person) => {
    const ok = window.confirm(`remove ${person.name} from phonebook?`)
    if ( ok ) {
      personService.remove(person.id).then( () => {
        setPersons(persons.filter(p => p.id !== person.id))
        notifyWith(`number of ${person.name} deleted!`)
      })
    }
  }

  const byFilterField =
    p => p.name.toLowerCase().includes(filter.toLowerCase())

  const personsToShow = filter ? persons.filter(byFilterField) : persons

  return (
    <div>
      <h2>Phonebook</h2>

      <Notification info={info} />

      <Filter filter={filter} setFilter={setFilter} />
      
      <h3>Add a new</h3>

      <PersonForm 
        addPerson={addPerson}
        newName={newName}
        newNumber={newNumber}
        setNewName={setNewName}
        setNewNumber={setNewNumber}
      />

      <h3>Phone numbers</h3>

      <Persons
        persons={personsToShow}
        removePerson={removePerson}
      />
    </div>
  )

}

export default App