const Notification = ({errorMessage, successMessage}) => {
    if (errorMessage === null && successMessage === null) {
        return null
    } else if (errorMessage !== null && successMessage !== null) {
        return (
            <>
                <div className='error'>
                    {errorMessage}
                </div>
                <div className='success'>
                    {successMessage}
                </div>
            </>
        )
    } else if (errorMessage !== null) {
        return (
            <div className='error'>
                {errorMessage}
            </div>
        )
    }

    return (
        <>
            <div className='success'>
                {successMessage}
            </div>
        </>
    )
}

export default Notification
