const mongoose = require("mongoose");
const url = process.env.MONGODB_URI
console.log('connecting to', url)

mongoose.connect(url)

personSchema.set('toJSON', {
    transform: (doc, ret) => {
        ret.id = ret._id.toString()
        delete ret._id
        delete ret.__v
    }
})
module.exports = mongoose.model('Person', personSchema)