import {useDispatch} from "react-redux";

const AnecdoteForm = () => {
    const dispatch = useDispatch()

    const addAnecdote = (event) => {
        event.preventDefault()
    }

    return (
        <div>
            <form onSubmit={addAnecdote}>
                <div><input/></div>
                <button type="submit">create</button>
            </form>
        </div>
    )
}
export default AnecdoteForm