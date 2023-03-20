const bcrypt = require('bcryptjs')
const userRouter = require('express').Router()

const User = require('../models/user')

userRouter.post('/', async (req, res) => {
    const {username, name, password} = req.body

    const existingUser = await User.findOne({username})
    if (existingUser) {
        return res.status(400).json({
            error: 'username must be unique'
        })
    }

    const saltRounds = 10
    const passwordHash = await bcrypt.hash(password, saltRounds)

    const user = new User({
        username,
        name,
        passwordHash
    })

    const savedUser = await user.save()

    res.status(201).json(savedUser)
})

module.exports = userRouter