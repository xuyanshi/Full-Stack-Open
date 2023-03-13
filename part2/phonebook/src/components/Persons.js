import personService from "../services/person";

const Person = ({person, query}) => {
    const personName = person.name.toLowerCase()
    query = query.toLowerCase()
    if (query === '' || personName.indexOf(query) !== -1) {
        return (
            <div>
                {person.name} {person.phone}
                <button onClick={() => {
                    const result = window.confirm(`Delete ${person.name}?`)
                    if (result) {
                        personService.del(person.id)
                    }
                }}>
                    delete
                </button>
            </div>
        )
    }
}

const Persons = ({persons, newQuery}) => {
    return (
        <div>
            {persons.map(person =>
                <Person key={person.id} person={person} query={newQuery}/>
            )}
        </div>
    )
}
export default Persons
