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
<<<<<<< HEAD
blogsRouter.post('/', async (req, res) => {
=======
blogsRouter.post('/', (req, res, next) => {
>>>>>>> parent of 17c6460 (try-catch)
    const body = req.body
    if (body.likes === undefined) {
        body.likes = 0
    }
    const blog = new Blog({
        title: body.title,
        author: body.author,
        url: body.url,
        likes: body.likes,
    })
<<<<<<< HEAD
    const savedBlog = await blog.save()
    res.status(201).json(savedBlog)
=======

    blog.save()
        .then(savedBlog => {
            res.status(201).json(savedBlog)
        })
        .catch(err => next(err))
>>>>>>> parent of 17c6460 (try-catch)
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
blogsRouter.put('/:id', (req, res, next) => {
    const body = req.body

    const blog = {
        title: body.title,
        author: body.author,
        url: body.url,
        likes: body.likes,
    }

    Blog.findByIdAndUpdate(req.params.id, blog, {new: true})
        .then(updatedBlog => {
            res.json(updatedBlog)
        })
        .catch(err => next(err))
})

module.exports = blogsRouter
