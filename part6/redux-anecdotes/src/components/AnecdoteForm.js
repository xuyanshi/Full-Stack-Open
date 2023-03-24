import {useDispatch} from "react-redux";

const AnecdoteForm = () => {
    const dispatch = useDispatch()
    return (
        <div>
            <form>
                <div><input/></div>
                <button>create</button>
            </form>
        </div>
    )
}
export default AnecdoteForm