import {filterChange} from '../reducers/filterReducer'
import {useDispatch} from 'react-redux'

const VisibilityFilter = (props) => {
    const dispatch = useDispatch()
    return (
        <div>
            filter<input type="text" name="filter" onChange={() => dispatch(filterChange('ALL'))}></input>
        </div>
    )
}

export default VisibilityFilter