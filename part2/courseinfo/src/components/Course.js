const Header = ({ courseName }) => <h2>{courseName}</h2>;

const Content = ({ parts }) => parts.map(part => <Part key={part.id} part={part} />);

const Part = ({ part }) => <p>{part.name} {part.exercises}</p>;

const Total = ({ sum }) => <p><strong>Total of exercises {sum}</strong></p>;

const Course = ({ course }) =>
    <>
        <Header courseName={course.name} />
        <Content parts={course.parts} />
        <Total sum={course.parts.reduce((a, b) => a + b.exercises, 0)} />
    </>

export default Course;