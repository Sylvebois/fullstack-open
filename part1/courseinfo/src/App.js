const Header = (props) => {
  return (<h1>{props.courseName}</h1>);
};

const Content = (props) => {
  return (
    <div>
      { props.partsName.map((part, index) => <p key={index}>{part} {props.nbOfEx[index]}</p>) }
    </div>
  );
};

const Total = (props) => {
  const tot = props.nbOfEx.reduce((a, b) => a + b);
  return (<p>Number of exercices {tot}</p>);
};

const App = () => {
  const course = 'Half Stack application development';
  const partsName = [
    'Fundamentals of React',
    'Using props to pass data',
    'State of a component'
  ];
  const nbOfEx = [10, 7, 14];

  return (
    <div>
      <Header courseName={course} />
      <Content partsName={partsName} nbOfEx={nbOfEx} />
      <Total nbOfEx={nbOfEx} />
    </div>
  )
};

export default App;
