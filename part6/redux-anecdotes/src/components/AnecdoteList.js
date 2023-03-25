import {useDispatch, useSelector} from "react-redux";
import {vote} from "../reducers/anecdoteReducer";

const Anecdote = () => {

}

const AnecdoteList = () => {
    const anecdotes = useSelector(state => {
        if (state.filter === 'ALL') {
            return state.anecdotes
        }
        let filteredAnecdotes = []
        for (const anecdote of state.anecdotes) {
            if (anecdote.content.search(state.filterWord) !== -1) {
                filteredAnecdotes = filteredAnecdotes.concat(anecdote)
            }
        }
        return filteredAnecdotes
    })
    const dispatch = useDispatch()
    return (
        <div>
            {anecdotes.map(anecdote =>
                <div key={anecdote.id}>
                    <div>
                        {anecdote.content}
                    </div>
                    <div>
                        has {anecdote.votes}
                        <button onClick={() => dispatch(vote(anecdote.id))}>votes</button>
                    </div>
                </div>
            )}
        </div>
    )
}

export default AnecdoteList