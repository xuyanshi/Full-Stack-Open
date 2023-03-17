const mongoose = require('mongoose')
const supertest = require('supertest')
const app = require('../app')

const api = supertest(app)

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
})

afterAll(() => {
    mongoose.connection.close()
})