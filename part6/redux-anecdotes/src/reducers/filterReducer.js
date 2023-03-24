const filterReducer = (state = 'ALL', action) => {
    // ...
}

export const filterChange = filter => {
    return {
        type: 'SET_FILTER',
        filter,
    }
}

export default filterReducer