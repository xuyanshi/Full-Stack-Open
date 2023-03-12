const Filter = (props) => {
    return (
        <>
            <form>
                <div>filter shown with <input value={props.newQuery} onChange={props.handleQueryChange}/></div>
            </form>
        </>
    )
}
export default Filter
