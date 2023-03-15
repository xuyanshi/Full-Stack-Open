const express = require('express')
const morgan = require('morgan')
const mongoose = require('mongoose')

const password = 'Xys_991022'
const url =
    `mongodb+srv://xuyanshi1999:${password}@cluster-test.psvw21y.mongodb.net/personApp?retryWrites=true&w=majority`
mongoose.connect(url)

const app = express()

app.use(express.json())
app.use(morgan(':method :url :status :res[content-length] - :response-time ms  :data'))

morgan.token('data', (req, res, param) => {
    return JSON.stringify(req.body)
})

const personSchema = new mongoose.Schema({
    name: String,
    number: String
})

const Person = mongoose.model('Person', personSchema)


let persons = [
    {
        "id": 1,
        "name": "Arto Hellas",
        "number": "040-123456"
    },
    {
        "id": 2,
        "name": "Ada Lovelace",
        "number": "39-44-5323523"
    },
    {
        "id": 3,
        "name": "Dan Abramov",
        "number": "12-43-234345"
    },
    {
        "id": 4,
        "name": "Mary Poppendieck",
        "number": "39-23-6423122"
    }
]


app.get('/', (request, response) => {
    response.send('<h1>Home Page</h1>')
})

app.get('/api/persons', (req, res) => {
    Person.find({}).then(p => {
        res.json(persons)
    })
})

app.get('/info', (req, res) => {
    res.send(`<div>Phonebook has info for ${persons.length} people<div>   
    <div>${new Date().toDateString()} ${new Date().toTimeString()}</div>`)
})

app.get('/api/persons/:id', (req, res) => {
    const id = Number(req.params.id)
    const person = persons.find(p => p.id === id)
    if (person) {
        res.json(person)
    } else {
        res.status(404).end()
    }
})

const generateId = () => {
    return Math.floor(Math.random() * Number.MAX_SAFE_INTEGER)
}

app.post('/api/persons', (req, res) => {
    const body = req.body
    if (body.name == null || body.number == null) {
        return res.status(400).json({
            error: 'name or number missing'
        })
    }
    if (persons.find(p => p.name === body.name) != null) {
        return res.status(403).json({
            error: 'name must be unique'
        })
    }
    const person = {
        id: generateId(),
        name: body.name,
        number: body.number,
    }

    persons = persons.concat(person)
})

app.delete('/api/persons:id', (req, res) => {
    const id = Number(req.params.id)
    persons = persons.filter(p => p.id !== id)
    res.status(204).end()
})


const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})
