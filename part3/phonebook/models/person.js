const mongoose = require("mongoose");
const url = process.env.MONGODB_URI
console.log('connecting to', url)

mongoose.connect(url)
    .then(result => {
        console.log('connected to MongoDB')
    }).catch((err) => {
    console.log('error connecting to MongoDB', err.message)
})

const personSchema = new mongoose.Schema({
    name: {
        type: String,
        minLength: 3,
        required: true
    },
    number: {
        type: String,
        required: true
    }
})


personSchema.set('toJSON', {
    transform: (doc, ret) => {
        ret.id = ret._id.toString()
        delete ret._id
        delete ret.__v
    }
})
module.exports = mongoose.model('Person', personSchema)
