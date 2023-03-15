const mongoose = require('mongoose')

if (process.argv.length < 5) {
    console.log('Please provide the password as an argument: node mongo.js <password> <name> <phone-number>')
    process.exit(1)
}

const password = process.argv[2]

const url =
    `mongodb+srv://xuyanshi1999:${password}@cluster-test.psvw21y.mongodb.net/phonebookApp?retryWrites=true&w=majority`

mongoose.connect(url)


