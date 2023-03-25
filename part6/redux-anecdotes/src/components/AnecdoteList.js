import {useDispatch, useSelector} from "react-redux";
import {vote} from "../reducers/anecdoteReducer";

const Anecdote = () => {

}

const AnecdoteList = () => {
    const anecdotes = useSelector(state => state.anecdotes)
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