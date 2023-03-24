import {useSelector, useDispatch} from 'react-redux'
import AnecdoteForm from './components/AnecdoteForm'
import AnecdoteList from './components/AnecdoteList'

const App = () => {



    return (
        <div>
            <h2>Anecdotes</h2>

            <h2>create new</h2>
            <form>
                <div><input/></div>
                <button>create</button>
            </form>

            <AnecdoteList />
        </div>
    )
}

export default App