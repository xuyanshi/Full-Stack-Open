const blogsRouter = require('express').Router()
const Blog = require('../models/blog')
const {json} = require("express");

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
blogsRouter.post('/', (req, res, next) => {
    const body = req.body

    const blog = new Blog({
        title: body.title,
        author: body.author,
        url: body.url,
        likes: body.likes,
    })

    blog.save()
        .then(savedBlog => {
            res.json(savedBlog)
        })
        .catch(err => next(err))
})

// delete one blog
blogsRouter.delete('/:id', (req, res, next) => {
    Blog.findByIdAndRemove(req.params.id)
        .then(() => {
            res.status(204).end()
        })
        .catch(err => next(err))
})

// update one blog
