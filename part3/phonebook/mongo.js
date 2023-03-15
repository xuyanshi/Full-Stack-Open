const mongoose = require('mongoose')

if (process.argv.length < 5) {
    console.log('Please provide the password as an argument: node mongo.js <password> <name> <phone-number>')
    process.exit(1)
}

