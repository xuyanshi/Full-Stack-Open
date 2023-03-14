import personService from "../services/person";

const Person = ({person, query, handleDelete}) => {
    const personName = person.name.toLowerCase()
    query = query.toLowerCase()
    if (query === '' || personName.indexOf(query) !== -1) {
        return (
            <div>
                {person.name} {person.phone}
                <button onClick={() => handleDelete(person.id)}>
                    delete
                </button>
            </div>
        )
    }
}

const Persons = ({persons, newQuery, handleDelete}) => {
    return (
        <div>
            {persons.map(person =>
                <Person key={person.id} person={person} query={newQuery} handleDelete={handleDelete}/>
            )}
        </div>
    )
}
export default Persons
