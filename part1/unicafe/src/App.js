import { useState } from 'react'

const Header = ({ text }) => <h1>{text}</h1>;

const Button = ({ text, handleClick }) => <button onClick={handleClick}>{text}</button>;

const StatisticsLine = ({ text, value }) => {
  return(  
  <tr>
    <td>{text}</td>
    <td>{value} {text === "Positive" ? "%" : ""}</td>
  </tr>
  );
};

const Statistics = ({ good, neutral, bad }) => {
  const total = good + neutral + bad;
  const avg = (good - bad) / total;
  const percentGood = good / total * 100;

  return (
    <table>
      <tbody>
        <StatisticsLine text="Good" value={good} />
        <StatisticsLine text="Neutral" value={neutral} />
        <StatisticsLine text="Bad" value={bad} />
        <StatisticsLine text="All" value={total} />
        <StatisticsLine text="Average" value={avg} />
        <StatisticsLine text="Positive" value={percentGood} />
      </tbody>
    </table>
  );
};

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const all = good + neutral + bad;

  const clickGood = () => setGood(good + 1);
  const clickNeutral = () => setNeutral(neutral + 1);
  const clickBad = () => setBad(bad + 1);

  return (
    <div>
      <Header text="Give feedback" />
      <Button handleClick={clickGood} text="Good" />
      <Button handleClick={clickNeutral} text="Neutral" />
      <Button handleClick={clickBad} text="Bad" />
      <Header text="Statistics" />
      {
        all === 0 ?
          <p>No feedback given</p> :
          <Statistics good={good} neutral={neutral} bad={bad} />
      }
    </div>
  );
}

export default App