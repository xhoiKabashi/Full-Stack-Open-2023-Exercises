import { useState } from "react";
import Header from "./components/Header";
import Button from "./components/Button";
import Title from "./components/Title";
import Statictics from "./components/Statictics";

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  console.log("Good", good);
  console.log("Neutral", neutral);
  console.log("Bad", bad);

  const statsLength = good + bad + neutral;
  const totalStats = good * 1 + bad * -1 + neutral * 0;
  const getAverageStats = totalStats
    ? (totalStats / statsLength).toFixed(2)
    : "0";
  const getPositiveStats = statsLength
    ? ((good / statsLength) * 100).toFixed(0)
    : "0";

  return (
    <>
      <Header text="Provide Feedback" />
      <Button handleFeedBack={() => setGood(good + 1)} text="Good" />
      <Button handleFeedBack={() => setNeutral(neutral + 1)} text="Neutral" />
      <Button handleFeedBack={() => setBad(bad + 1)} text="Bad" />
      <Title text="Statistics:" />
      {statsLength ? (
        <table>
          <tbody>
            <Statictics text="Good" ratings={good} />
            <Statictics text="Neutral" ratings={neutral} />
            <Statictics text="Bad" ratings={bad} />
            <Statictics text="All" ratings={statsLength} />
            <Statictics text="Avarage" ratings={getAverageStats} />
            <Statictics text="Positive" ratings={getPositiveStats} />
          </tbody>
        </table>
      ) : (
        <Title text="No Statistics" />
      )}
    </>
  );
};

export default App;
