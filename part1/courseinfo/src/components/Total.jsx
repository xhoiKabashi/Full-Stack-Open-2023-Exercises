/* eslint-disable react/prop-types */
const Total = ({ parts }) => {
  const total =
    parts.parts[0].exercises +
    parts.parts[1].exercises +
    parts.parts[2].exercises;

  return <div>Total: {total}</div>;
};

export default Total;
