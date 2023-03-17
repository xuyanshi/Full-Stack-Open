const Blog = require('../models/blog')
const User = require('../models/user')

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

const blogsInDb = async () => {
    const blogs = await Blog.find({})
    return blogs.map(blog => blog.toJSON())
}

const nonExistingId = async () => {
    const blog = new Blog({
        "title": "nonExisting",
        "author": "nonExisting",
        "url": "nonExisting",
        "likes": 0
    })

    await blog.save()
    await blog.remove()

    return blog._id.toString()
}

const usersInDb = async () => {
    const users = await User.find({})
    return users.map(u => u.toJSON())
}

module.exports = {
    initialBlogs, nonExistingId, blogsInDb, usersInDb
}
