const mongoose = require('mongoose')
const supertest = require('supertest')
const app = require('../app')
const api = supertest(app)
const Blog = require('../models/blog')

const initialBlogs = [
    {
        "title": "Test Title",
        "author": "xuyanshi",
        "url": "https://xuyanshi.github.io/",
        "likes": 12345,
        "id": "6414468a31cc17f65a79f48c"
    },
    {
        "title": "KMP algorithm",
        "author": "K-M-P",
        "url": "https://xuyanshi.github.io/",
        "likes": 123456,
        "id": "641448f7ee77b454be7d05fd"
    }
]

test('blogs are returned as json', async () => {
    await api
        .get('/api/blogs')
        .expect(200)
        .expect('Content-Type', /application\/json/)
}, 100000)

test('there are 2 blogs', async () => {
    const response = await api.get('/api/blogs')

    expect(response.body).toHaveLength(2)
}, 100000)

test('the first blog is about test', async () => {
    const response = await api.get('/api/blogs')

    expect(response.body[0].title).toBe('Test Title')
}, 100000)

test('blog id', async () => {
    const response = await api.get('/api/blogs')

    expect(response.body[0].id).toBeDefined()
}, 100000)

afterAll(() => {
    mongoose.connection.close()
})