/* eslint-disable react/prop-types */
const Content = ({ parts }) => {
  return (
    <>
      <div>
        {parts.parts[0].name} {parts.parts[0].exercises}
      </div>
      <div>
        {parts.parts[1].name} {parts.parts[1].exercises}
      </div>{" "}
      <div>
        {parts.parts[2].name} {parts.parts[2].exercises}
      </div>
    </>
  );
};

export default Content;
