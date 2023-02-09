const Header = (props) => {
  return (<h1>{props.courseName}</h1>);
};

const Content = () => {

};

const Total = (props) => {
  const tot = props.numbers.reduce((a, b) => a + b);
  return (
    <p>
      Number of exercices {tot}
    </p>
  );
};

const App = () => {
  const course = 'Half Stack application development';
  const partsName = [
    'Fundamentals of React',
    'Using props to pass data',
    'State of a component'
  ];
  const exercisesPerPart = [10, 7, 14];

  return (
    <div>
      <Header courseName={course} />
      <p>
        {partsName[0]} {exercisesPerPart[0]}
      </p>
      <p>
        {partsName[1]} {exercisesPerPart[1]}
      </p>
      <p>
        {partsName[2]} {exercisesPerPart[2]}
      </p>
      <Total numbers={exercisesPerPart} />
    </div>
  )
};

export default App;
