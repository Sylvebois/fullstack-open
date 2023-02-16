const Header = ({ course }) => {
  return (<h1>{course}</h1>);
};

const Content = ({ parts }) => {
  return (
    <div>
      {parts.map((part, index) => <p key={index}>{part.name} {part.exercises}</p>)}
    </div>
  );
};

const Total = ({ parts }) => {
  let tot = 0;
  parts.forEach(part => tot += part.exercises);
  return (<p>Number of exercices {tot}</p>);
};

const App = () => {
  const course = 'Half Stack application development';
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
    }
  ]

  return (
    <div>
      <Header course={course} />
      <Content parts={parts} />
      <Total parts={parts} />
    </div>
  )
};

export default App;
