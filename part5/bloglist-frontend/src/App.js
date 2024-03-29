import {useEffect, useState} from 'react'
import Blog from './components/Blog'
import Notification from './components/Notification'
import Footer from './components/Footer'
import LoginForm from "./components/LoginForm";
import BlogForm from "./components/BlogForm";
import blogService from './services/blogs'
import loginService from './services/login'

const App = () => {
    const [blogs, setBlogs] = useState([])
    const [newTitle, setNewTitle] = useState('')
    const [newAuthor, setNewAuthor] = useState('')
    const [newUrl, setNewUrl] = useState('')
    const [newLikes, setNewLikes] = useState(0)

    const [errorMessage, setErrorMessage] = useState(null)
    const [successMessage, setSuccessMessage] = useState(null)

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [user, setUser] = useState(null)

    const [loginVisible, setLoginVisible] = useState(false)

    useEffect(() => {
        blogService.getAll().then(blogs => {
                blogs.sort((a, b) => {
                    return a.likes - b.likes
                })
                setBlogs(blogs)
            }
        )
    }, [])

    useEffect(() => {
        const loggedUserJSON = window.localStorage.getItem('loggedBlogappUser')
        if (loggedUserJSON) {
            const user = JSON.parse(loggedUserJSON)
            setUser(user)
            blogService.setToken(user.token)
        }
    }, [])

    const handleLogin = async (event) => {
        event.preventDefault()
        try {
            const user = await loginService.login({
                username, password
            })
            blogService.setToken(user.token)
            window.localStorage.setItem(
                'loggedBlogappUser', JSON.stringify(user)
            )
            setUser(user)
            setUsername('')
            setPassword('')
        } catch (exception) {
            setErrorMessage('Wrong credentials')
            setTimeout(() => {
                setErrorMessage(null)
            }, 5000)
        }
    }

    const addBlog = (event) => {
        event.preventDefault()
        const blogObject = {
            title: newTitle,
            author: newAuthor,
            url: newUrl,
            likes: newLikes,
        }

        blogService
            .create(blogObject)
            .then(returnedBlog => {
                setBlogs(blogs.concat(returnedBlog))
                blogs.sort((a, b) => {
                    return a.likes - b.likes
                })
                setBlogs(blogs)
                setNewTitle('')
                setNewAuthor('')
                setNewUrl('')
                setNewLikes(0)
            })

        setSuccessMessage('Blog created!')
        setTimeout(() => {
            setSuccessMessage(null)
        }, 5000)
    }

    const handleTitleChange = (event) => {
        setNewTitle(event.target.value)
    }

    const handleAuthorChange = (event) => {
        setNewAuthor(event.target.value)
    }

    const handleUrlChange = (event) => {
        setNewUrl(event.target.value)
    }

    const handleLikesChange = (event) => {
        setNewLikes(Number(event.target.value))
    }

    const loginForm = () => {
        const hideWhenVisible = {display: loginVisible ? 'none' : ''}
        const showWhenVisible = {display: loginVisible ? '' : 'none'}

        return (
            <div>
                <div style={hideWhenVisible}>
                    <button onClick={() => setLoginVisible(true)}>log in</button>
                </div>
                <div style={showWhenVisible}>
                    <LoginForm
                        username={username}
                        password={password}
                        handleUsernameChange={({target}) => setUsername(target.value)}
                        handlePasswordChange={({target}) => setPassword(target.value)}
                        handleSubmit={handleLogin}
                    />
                    <button onClick={() => setLoginVisible(false)}>cancel</button>
                </div>
            </div>
        )
    }

    const blogForm = () => (
        <form onSubmit={addBlog}>
            <label htmlFor="title">Title: </label>
            <input
                id="title"
                value={newTitle}
                onChange={handleTitleChange}
            />

            <label htmlFor="author">Author: </label>
            <input
                id="author"
                value={newAuthor}
                onChange={handleAuthorChange}
            />

            <label htmlFor="url">URL: </label>
            <input
                id="url"
                value={newUrl}
                onChange={handleUrlChange}
            />

            <label htmlFor="likes">Likes: </label>
            <input
                id="likes"
                value={newLikes}
                type="Number"
                onChange={handleLikesChange}
            />
            <button type="submit">create</button>
        </form>
    )

    const handleLogout = async (event) => {
        event.preventDefault()
        try {
            await loginService.logout(user)
            blogService.deleteToken()
            window.localStorage.removeItem('loggedBlogappUser')
            setUser(null)
            setUsername('')
            setPassword('')
        } catch (exception) {
            setErrorMessage('Logout fails')
            setTimeout(() => {
                setErrorMessage(null)
            }, 5000)
        }
    }


    if (user === null) {
        return (
            <div>
                <h2>Log in to application</h2>
                <Notification message={errorMessage} type='error'/>
                {loginForm()}
            </div>
        )
    }

    return (
        <div>
            <h2>blogs</h2>
            <Notification message={successMessage} type='success'/>
            <h2>{username} is logging in</h2>
            <button type="submit" onSubmit={handleLogout}>logout</button>
            {blogForm()}
            <ul>
                {blogs.map(blog =>
                    <li>
                        <Blog key={blog.id} blog={blog}/>
                    </li>
                )}
            </ul>

            <Footer/>
        </div>
    )


}

export default App