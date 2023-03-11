import {useState} from 'react'

const Buttom = (props) => {

}

const Feedback = (props) => {
    return (
        <p>{props.rank} {props.cnt}</p>
    )
}
const App = () => {
    // save clicks of each button to its own state
    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)

    return (
        <div>
            <h1>give feedback</h1>
            <h2>statistics</h2>
            <Feedback rank={'good'} cnt={good}/>
            <Feedback rank={'neutral'} cnt={neutral}/>
            <Feedback rank={'bad'} cnt={bad}/>
        </div>
    )
}

export default App