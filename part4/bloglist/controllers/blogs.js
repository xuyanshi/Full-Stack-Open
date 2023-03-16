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
    Blog.findById
})