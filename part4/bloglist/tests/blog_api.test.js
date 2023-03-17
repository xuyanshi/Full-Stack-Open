const mongoose = require('mongoose')
const supertest = require('supertest')
const app = require('../app')
const api = supertest(app)
const helper = require('./test_helper')

const Blog = require('../models/blog')

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
    console.log(blogForUpdating.id)
    await api
        .put(`/api/blogs/${blogForUpdating.id}`)
        .expect(200)

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

afterAll(() => {
    mongoose.connection.close()
})
