// mongodb+srv://xuyanshi1999:<password>@cluster-test.psvw21y.mongodb.net/?retryWrites=true&w=majority

const mongoose = require('mongoose')

if (process.argv.length < 3) {
    console.log('Please provide the password as an argument: node mongo.js <password>')
    process.exit(1)
}

// node mongo.js <password>
const password = process.argv[2]

const url =
    // `mongodb+srv://fullstack:${password}@cluster0.o1opl.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`
    `mongodb+srv://xuyanshi1999:${password}@cluster-test.psvw21y.mongodb.net/noteApp?retryWrites=true&w=majority`

mongoose.connect(url)

const noteSchema = new mongoose.Schema({
    content: String,
    date: Date,
    important: Boolean,
})
const Note = mongoose.model('Note', noteSchema)

// Add new data to the mongo database

// const note = new Note({
//     content: 'HTML is Easy',
//     date: new Date(),
//     important: true,
// })
//
// note.save().then(result => {
//     console.log('note saved!')
//     mongoose.connection.close()
// })

// Fetch data from the mongo database

Note.find({important: true}).then(result => {
    result.forEach(note => {
        console.log(note)
    })
    mongoose.connection.close()
})