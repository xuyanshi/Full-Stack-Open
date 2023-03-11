import {useState} from 'react'

const Buttom = ({handleClick, text}) => {
    return (
        <button onClick={handleClick}>{text}</button>
    )
}

const Feedback = (props) => {
    return (
        <p>{props.title} {props.data}</p>
    )
}
const App = () => {
    // save clicks of each button to its own state
    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)

    const voteForGood = () => {
        setGood(good + 1)
    }

    const voteForNeutral = () => {
        setNeutral(neutral + 1)
    }

    const voteForBad = () => {
        setBad(bad + 1)
    }

    return (
        <div>
            <h1>give feedback</h1>
            <Buttom handleClick={voteForGood} text="good"/>
            <Buttom handleClick={voteForNeutral} text="neutral"/>
            <Buttom handleClick={voteForBad} text="bad"/>
            <h2>statistics</h2>
            <Feedback title={'good'} data={good}/>
            <Feedback title={'neutral'} data={neutral}/>
            <Feedback title={'bad'} data={bad}/>
            <Feedback title={'all'} data={good + neutral + bad}/>
        </div>
    )
}

export default App