const mongoose = require('mongoose')
const argvLen = process.argv.length
const password = process.argv[2]
let newName = ''
let newNumber = ''


const url =
    `mongodb+srv://xuyanshi1999:${password}@cluster-test.psvw21y.mongodb.net/phonebookApp?retryWrites=true&w=majority`

mongoose.connect(url)

const phonebookSchema = new mongoose.Schema({
    name: String,
    number: Number
})

const Phonebook = mongoose.model('Phonebook', phonebookSchema)

const createPerson = () => {
    const newPerson = new Phonebook({
        name: newName,
        number: newNumber
    })

    newPerson.save().then(result => {
        console.log('this person saved!')
        mongoose.connection.close()
    })
}

const fetchPerson = () => {
    Phonebook.find({}).then(result => {
        result.forEach(person => {
            console.log(person)
        })
        mongoose.connection.close()
    })
}

if (argvLen === 3) {
    fetchPerson()
} else if (argvLen === 5) {
    newName = process.argv[3]
    newNumber = process.argv[4]
    createPerson()
} else {
    console.log('Please provide the password as an argument: node mongo.js <password> <name> <phone-number>')
    process.exit(1)
}
