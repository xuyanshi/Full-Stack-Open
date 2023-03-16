const blogsRouter = require('express').Router()
const Blog = require('../models/blog')

// get all blogs
blogsRouter.get('/', (req, res) => {
    Blog.find({}).then(b => {
        res.json(b)
    })
})

// get one blog
blogsRouter.get('/:id', (req, res, next) => {
    Blog.findById(req.params.id)
        .then(b => {
            if (b) {
                res.json(b)
            } else {
                res.status(404).end()
            }
        })
        .catch(err => next(err))
})

// create a new blog
