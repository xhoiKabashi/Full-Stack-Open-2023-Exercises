/* eslint-disable react/prop-types */
const Button = ({ handleFeedBack, text }) => {
  return <button onClick={handleFeedBack}>{text}</button>;
};

export default Button;
