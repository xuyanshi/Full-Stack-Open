const mongoose = require('mongoose')

if (process.argv.length < 5) {
    console.log('Please provide the password as an argument: node mongo.js <password> <name> <phone-number>')
    process.exit(1)
}

const password = process.argv[2]
const newName = process.argv[3]
const newNumber = process.argv[4]

const url =
    `mongodb+srv://xuyanshi1999:${password}@cluster-test.psvw21y.mongodb.net/phonebookApp?retryWrites=true&w=majority`

mongoose.connect(url)

const phonebookSchema = new mongoose.Schema({
    name: String,
    
})