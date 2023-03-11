const Header = (props) => {
    return (
        <h1>{props.course}</h1>
    )
}

const Part = (props) => {
    return (
        <p>
            {props.part0} {props.exercises0}
        </p>
    )
}

const Content = (props) => {
    return (
        <div>
            <Part part0={props.part1} exercises0={props.exercises1}/>
            <Part part0={props.part2} exercises0={props.exercises2}/>
            <Part part0={props.part3} exercises0={props.exercises3}/>
        </div>
    )

}

const Total = (props) => {
    return (
        <p>Number of exercises {props.exercises1 + props.exercises2 + props.exercises3}</p>
    )
}

function App() {
    const course = 'Half Stack application development'
    const part1 = {
        name: 'Fundamentals of React',
        exercises: 10
    }
    const part2 = {
        name: 'Using props to pass data',
        exercises: 7
    }
    const part3 = {
        name: 'State of a component',
        exercises: 14
    }
    return (
        <div>
            <Header course={course}/>
            <Content part1={part1.name} part2={part2.name} part3={part3.name} exercises1={part1.exercises}
                     exercises2={part2.exercises}
                     exercises3={part3.exercises}/>
            <Total exercises1={part1.exercises} exercises2={part2.exercises} exercises3={part3.exercises}/>
        </div>
    );
}

export default App;
