const blogsRouter = require('express').Router()
const Blog = require('../models/blog')
const User = require('../models/user')
const {json} = require("express");
const jwt = require('jsonwebtoken')

// get all blogs
blogsRouter.get('/', async (req, res) => {
    const blogs = await Blog
        .find({})
        .populate('user', {username: 1, id: 1})
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
})

const getTokenFrom = request => {
    const authorization = request.get('authorization')
    if (authorization && authorization.toLowerCase().startsWith('bearer ')) {
        return authorization.substring(7)
    }
    return null
}


// create a new blog
blogsRouter.post('/', async (req, res) => {
    const body = req.body

    const token = getTokenFrom(req)
    const decodedToken = jwt.verify(token, process.env.SECRET)
    if (!decodedToken.id) {
        return res.status(401).json({error: 'token missing or invalid'})
    }

    const user = await User.findById(decodedToken.id)

    if (body.likes === undefined) {
        body.likes = 0
    }
    const blog = new Blog({
        title: body.title,
        author: body.author,
        url: body.url,
        likes: body.likes,
        user: user._id
    })
    const savedBlog = await blog.save()
    user.blogs = user.blogs.concat(savedBlog._id)
    await user.save()

    res.json(savedBlog)
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
            //res.status(200).json(updatedBlog)
            res.json(updatedBlog)
        })
        .catch(err => next(err))
})

module.exports = blogsRouter
