const Header = ({course}) => <h1>{course}</h1>

const Total = ({sum}) => <strong>total of {sum} exercises</strong>

const Part = ({part}) =>
    <p>
        {part.name} {part.exercises}
    </p>

const Content = ({parts}) =>
    <>
        {parts.map(part =>
            <Part key={part.id} part={part}/>
        )}
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

export default Course
