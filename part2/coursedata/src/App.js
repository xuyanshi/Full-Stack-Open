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

const Course = ({course}) => {
    const total = course.parts.reduce((accumulator, currentValue) => {
        // console.log('what is happening', accumulator, currentValue)
        return accumulator + currentValue.exercises
    }, 0)

    return (
        <div>
            <Header course={course.name}/>
            <Content parts={course.parts}/>
            <Total sum={total}/>
        </div>
    )
}

const App = () => {
    const courses = [
        {
            name: 'Half Stack application development',
            id: 1,
            parts: [
                {
                    name: 'Fundamentals of React',
                    exercises: 10,
                    id: 1
                },
                {
                    name: 'Using props to pass data',
                    exercises: 7,
                    id: 2
                },
                {
                    name: 'State of a component',
                    exercises: 14,
                    id: 3
                },
                {
                    name: 'Redux',
                    exercises: 11,
                    id: 4
                }
            ]
        },
        {
            name: 'Node.js',
            id: 2,
            parts: [
                {
                    name: 'Routing',
                    exercises: 3,
                    id: 1
                },
                {
                    name: 'Middlewares',
                    exercises: 7,
                    id: 2
                }
            ]
        }
    ]


    return (
        <>

        </>
    )
}

export default App
