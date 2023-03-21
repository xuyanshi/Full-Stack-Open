const Blog = ({blog}) => (
    <div>
        <ul>
            <li>Title: {blog.title}</li>
            <li>Author: {blog.author}</li>
            <li>Url: {blog.url}</li>
            <li> Likes: {blog.likes}</li>
        </ul>
    </div>
)

export default Blog