const initialState = {
    type: 'ALL',
    payload: {filter: 'ALL', filterWord: ''}
}

const filterReducer = (state = 'ALL', action) => {
    console.log('ACTION: ', action)
    switch (action.type) {
        case 'SET_FILTER':
            return action.payload
        default:
            return state
    }
}

export const filterChange = (filter, filterWord) => {
    return {
        type: 'SET_FILTER',
        payload: {filter, filterWord},
    }
}

export default filterReducer