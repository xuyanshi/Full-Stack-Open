import {useDispatch, useSelector} from "react-redux";
import {vote} from "../reducers/anecdoteReducer";

const AnecdoteList = () => {
    const anecdotes = useSelector(state => {
        if (state.filter === 'ALL') {
            return state.anecdotes
        }
        console.log("state.anecdotes", state.anecdotes)
        console.log("state.filter", state.filter)
        console.log("state.filterWord", state.filter.filterWord)
        let filteredAnecdotes = []
        for (const anecdote of state.anecdotes) {
            console.log("anecdote", anecdote)
            if (anecdote.content.includes(state.filter.filterWord)) {
                filteredAnecdotes = filteredAnecdotes.concat(anecdote)
            }
        }
        console.log("filteredAnecdotes", filteredAnecdotes)
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