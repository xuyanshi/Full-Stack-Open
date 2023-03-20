const mongoose = require('mongoose')
const supertest = require('supertest')
const app = require('../app')
const api = supertest(app)
const bcrypt = require('bcryptjs')
const helper = require('./test_helper')

const User = require('../models/user')
const Blog = require('../models/blog')
const {text} = require("express");

beforeEach(async () => {
    await Blog.deleteMany({})
    for (let blog of helper.initialBlogs) {
        let blogObject = new Blog(blog)
        await blogObject.save()
    }
}, 100000)

test('blogs are returned as json', async () => {
    await api
        .get('/api/blogs')
        .expect(200)
        .expect('Content-Type', /application\/json/)
}, 100000)

test('there are 2 blogs', async () => {
    const response = await api.get('/api/blogs')

    expect(response.body).toHaveLength(helper.initialBlogs.length)
}, 100000)

test('the first blog is about test', async () => {
    const response = await api.get('/api/blogs')

    const titles = response.body.map(r => r.title)
    expect(titles).toContain('Test Title')
}, 100000)

test('blog id', async () => {
    const response = await api.get('/api/blogs')

    expect(response.body[0].id).toBeDefined()
}, 100000)

test('create a new blog', async () => {
    const newBlog = {
        "title": "quick sort",
        "author": "unknown",
        "url": "https://xuyanshi.github.io/posts/quick-sort/",
        "likes": 100
    }

    await api
        .post('/api/blogs')
        .send(newBlog)
        .expect(201)
        .expect('Content-Type', /application\/json/)

    const blogsAtEnd = await helper.blogsInDb()
    expect(blogsAtEnd).toHaveLength(helper.initialBlogs.length + 1)

    const titles = blogsAtEnd.map(b => b.title)
    expect(titles).toContain("quick sort")
}, 100000)

test('create a new blog without likes', async () => {
    const newBlog = {
        "title": "quick sort",
        "author": "unknown",
        "url": "https://xuyanshi.github.io/posts/quick-sort/",
    }

    await api
        .post('/api/blogs')
        .send(newBlog)
        .expect(201)
        .expect('Content-Type', /application\/json/)

    const blogsAtEnd = await helper.blogsInDb()
    expect(blogsAtEnd).toHaveLength(helper.initialBlogs.length + 1)

    const titles = blogsAtEnd.map(b => b.title)
    expect(titles).toContain("quick sort")
}, 100000)

test('create a new blog without title', async () => {
    const newBlog = {
        "author": "unknown",
        "url": "https://xuyanshi.github.io/posts/quick-sort/",
        "likes": 100
    }

    await api
        .post('/api/blogs')
        .send(newBlog)
        .expect(400)
        .expect('Content-Type', /application\/json/)

    const blogsAtEnd = await helper.blogsInDb()
    expect(blogsAtEnd).toHaveLength(helper.initialBlogs.length)
}, 100000)

test('create a new blog without url', async () => {
    const newBlog = {
        "title": "quick sort",
        "author": "unknown",
        "likes": 100
    }

    await api
        .post('/api/blogs')
        .send(newBlog)
        .expect(400)
        .expect('Content-Type', /application\/json/)

    const blogsAtEnd = await helper.blogsInDb()
    expect(blogsAtEnd).toHaveLength(helper.initialBlogs.length)

}, 100000)

test('update a blog', async () => {
    const blogsAtStart = await helper.blogsInDb()
    const blogForUpdating = {
        "title": "KMP algorithm",
        "author": "K-M-P",
        "url": "https://xuyanshi.github.io/",
        "likes": 123456789,
    }
    let updatedId = ''
    for (const b of blogsAtStart) {
        if (b.title === blogForUpdating.title) {
            updatedId = b.id
        }
    }
    console.log('blogForUpdating.id', blogForUpdating.id)
    await api
        .put(`/api/blogs/${updatedId}`)
        .send(blogForUpdating)
        .expect(200)
        .expect('Content-Type', /application\/json/)

    const blogsAtEnd = await helper.blogsInDb()
    expect(blogsAtEnd).toHaveLength(helper.initialBlogs.length)

    const titles = blogsAtEnd.map(b => b.title)
    const allOfLikes = blogsAtEnd.map(b => b.likes)
    expect(titles).toContain(blogForUpdating.title)
    expect(allOfLikes).toContain(blogForUpdating.likes)
}, 100000)

test('delete a blog', async () => {
    const blogsAtStart = await helper.blogsInDb()
    const blogToDelete = blogsAtStart[0]

    await api
        .delete(`/api/blogs/${blogToDelete.id}`)
        .expect(204)

    const blogsAtEnd = await helper.blogsInDb()
    expect(blogsAtEnd).toHaveLength(helper.initialBlogs.length - 1)

    const titles = blogsAtEnd.map(b => b.title)
    expect(titles).not.toContain(blogToDelete.title)
}, 100000)

describe('when there is one user in database initially', () => {
    beforeEach(async () => {
        await User.deleteMany({})

        const passwordHash = await bcrypt.hash('secret', 10)
        const user = new User({username: 'root', passwordHash})

        await user.save()
    })

    text('creation succeeds with a fresh username', async () => {
        const userAtStart = await helper.usersInDb()

        const newUser = {
            username: 'xuyanshi',
            name: 'Yanshi Xu',
            password: 'mima',
        }

        await api
            .post('/api/users')
            .send(newUser)
            .expect(201)
            .expect('Content-Type', /application\/json/)

        const userAtEnd = await helper.usersInDb()
        expect(userAtEnd).toHaveLength(userAtStart.length + 1)

        const usernames = userAtEnd.map(u => u.username)
        expect(usernames).toContain(newUser.username)
    })
})

afterAll(() => {
    mongoose.connection.close()
})
