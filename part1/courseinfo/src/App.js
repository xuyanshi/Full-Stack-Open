const Header = (props) => {
    return (
        <h1>{props.course}</h1>
    )
}

const Part = (props) => {
    return (
        <p>
            {props.part0.name} {props.part0.exercises}
        </p>
    )
}

const Content = (props) => {
    return (
        <div>
            <Part part0={props.parts[0]}/>
            <Part part0={props.parts[1]}/>
            <Part part0={props.parts[2]}/>
        </div>
    )

}

const Total = (props) => {
    return (
        <p>Number of exercises {props.parts[0].exercises + props.parts[1].exercises + props.parts[2].exercises}</p>
    )
}

function App() {
    const course = 'Half Stack application development'
    const parts = [{
        name: 'Fundamentals of React',
        exercises: 10
    }, {
        name: 'Using props to pass data',
        exercises: 7
    }, {
        name: 'State of a component',
        exercises: 14
    }]
    return (
        <div>
            <Header course={course}/>
            <Content parts={parts}/>
            <Total parts={parts}/>
        </div>
    );
}

export default App;
