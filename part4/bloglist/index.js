const http = require('http')
const express = require('express')
const app = express()
const cors = require('cors')
const mongoose = require('mongoose')

// const app = require('./app') // the actual Express application
const config = require('./utils/config')
const logger = require('./utils/logger')

const server = http.createServer(app)
const blogSchema = new mongoose.Schema({
    title: String,
    author: String,
    url: String,
    likes: Number
})

const Blog = mongoose.model('Blog', blogSchema)

// const mongoUrl = 'mongodb://localhost/bloglist'
const mongoUrl = 'mongodb+srv://xuyanshi1999:Xys_991022@cluster-test.psvw21y.mongodb.net/blogApp?retryWrites=true&w=majority'
mongoose.connect(mongoUrl)

app.use(cors())
app.use(express.json())

app.get('/api/blogs', (request, response) => {
    logger.info('get all blogs...', new Date().toLocaleDateString(), new Date().toLocaleTimeString())
    Blog
        .find({})
        .then(blogs => {
            response.json(blogs)
        })
})

app.post('/api/blogs', (request, response) => {
    logger.info('create a new blog...', new Date().toLocaleDateString(), new Date().toLocaleTimeString())
    const blog = new Blog(request.body)
    blog
        .save()
        .then(result => {
            response.status(201).json(result)
        })
})

app.listen(config.PORT, () => {
    logger.info(`Server running on port ${config.PORT}`)
})