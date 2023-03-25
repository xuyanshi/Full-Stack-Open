import {filterChange} from '../reducers/filterReducer'
import {useDispatch} from 'react-redux'

const VisibilityFilter = (props) => {
    const dispatch = useDispatch()
    return (
        <div>
            filter<input type="text" name="filter" id="filter"
                         onChange={() => dispatch(filterChange('SET_FILTER', document.getElementById('filter').value))}/>
        </div>
    )
}

export default VisibilityFilter