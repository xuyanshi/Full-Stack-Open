const Header = ({course}) => <h1>{course}</h1>

const Total = ({sum}) => <strong>total of {sum} exercises</strong>

const Part = ({part}) =>
    <p>
        {part.name} {part.exercises}
    </p>

const Content = ({parts}) =>
    <>
        <Part
            part={parts[0]}
        />
        <Part
            part={parts[1]}
        />
        <Part
            part={parts[2]}
        />
        <Part
            part={parts[3]}
        />
    </>

const App = () => {
    const course = 'Half Stack application development'
    const parts = [
        {
            name: 'Fundamentals of React',
            exercises: 10
        },
        {
            name: 'Using props to pass data',
            exercises: 7
        },
        {
            name: 'State of a component',
            exercises: 14
        },
        {
            name: 'Redux',
            exercises: 11,
            id: 4
        }
    ]

    const total = parts.reduce((accumulator, currentValue) => {
        // console.log('what is happening', accumulator, currentValue)
        return accumulator + currentValue.exercises
    }, 0)

    return (
        <div>
            <Header course={course}/>
            <Content parts={parts}/>
            <Total sum={total}/>
        </div>
    )
}

export default App
