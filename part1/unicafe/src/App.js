import {useState} from 'react'

const Button = ({goodClick, neutralClick, badClick}) => {
    return (
        <div>
            <button onClick={goodClick}>good</button>
            <button onClick={neutralClick}>neutral</button>
            <button onClick={badClick}>bad</button>
        </div>
    )
}

const StatisticLine = ({text, value}) => {
    return (
        <p>{text} {value}</p>
    )
}

// a proper place to define a component
const Statistics = ({good, neutral, bad, voted}) => {

    const countAll = (g, n, b) => {
        return g + n + b
    }

    const calAverage = (g, n, b) => {
        return (g - b) / (g + n + b)
    }

    const calPositive = (g, n, b) => {
        return (100 * g / (g + n + b)) + ' %'
    }

    if (!voted) {
        return (
            <div>No feedback given</div>
        )
    }

    return (
        <div>
            <StatisticLine text={'good'} value={good}/>
            <StatisticLine text={'neutral'} value={neutral}/>
            <StatisticLine text={'bad'} value={bad}/>
            <StatisticLine text={'all'} value={countAll(good, neutral, bad)}/>
            <StatisticLine text={'average'} value={calAverage(good, neutral, bad)}/>
            <StatisticLine text={'positive'} value={calPositive(good, neutral, bad)}/>
        </div>
    )
}

const App = () => {
    // save clicks of each button to its own state
    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)
    const [voted, setVoted] = useState(false)

    const voteForGood = () => {
        setGood(good + 1)
        setVoted(true)
    }

    const voteForNeutral = () => {
        setNeutral(neutral + 1)
        setVoted(true)
    }

    const voteForBad = () => {
        setBad(bad + 1)
        setVoted(true)
    }

    return (
        <div>
            <h1>give feedback</h1>
            <Button goodClick={voteForGood} neutralClick={voteForNeutral} badClick={voteForBad}/>
            <h2>statistics</h2>
            <Statistics good={good} neutral={neutral} bad={bad} voted={voted}/>
        </div>
    )
}

export default App