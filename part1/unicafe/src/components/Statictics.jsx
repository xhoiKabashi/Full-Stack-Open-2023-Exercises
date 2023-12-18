/* eslint-disable react/prop-types */
const Statictics = ({ text, ratings }) => {
  return (
    <tr>
      <td>{text}</td>
      <td>{ratings}</td>
    </tr>
  );
};

export default Statictics;
