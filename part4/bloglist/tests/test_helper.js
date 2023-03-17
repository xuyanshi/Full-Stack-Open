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

const blogsInDb = async () => {
    const blogs = await Blog.find({})
    return blogs.map(blog => blog.toJSON())
}
