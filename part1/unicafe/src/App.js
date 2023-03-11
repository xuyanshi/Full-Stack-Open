import {useState} from 'react'

const Button = ({handleClick, text}) => {
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

    const countAll = (g, n, b) => {
        return g + n + b
    }

    const calAverage = (g, n, b) => {
        return (g - b) / (g + n + b)
    }

    const calPositive = (g, n, b) => {
        return (100 * g / (g + n + b)) + ' %'
    }

    // a proper place to define a component
    const Statistics = (props) => {
        // ...
    }

    return (
        <div>
            <h1>give feedback</h1>
            <Button handleClick={voteForGood} text="good"/>
            <Button handleClick={voteForNeutral} text="neutral"/>
            <Button handleClick={voteForBad} text="bad"/>
            <h2>statistics</h2>
            <Feedback title={'good'} data={good}/>
            <Feedback title={'neutral'} data={neutral}/>
            <Feedback title={'bad'} data={bad}/>
            <Feedback title={'all'} data={countAll(good, neutral, bad)}/>
            <Feedback title={'average'} data={calAverage(good, neutral, bad)}/>
            <Feedback title={'positive'} data={calPositive(good, neutral, bad)}/>
        </div>
    )
}

export default App