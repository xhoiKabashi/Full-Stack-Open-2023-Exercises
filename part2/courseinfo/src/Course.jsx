/* eslint-disable react/prop-types */
import Header from "./Header";
import Content from "./Content";
const Course = ({ course }) => {
  return (
    <>
      <Header course={course[0]} />
      <Content course={course[0]} />
      <Header course={course[1]} />
      <Content course={course[1]} />
    </>
  );
};

export default Course;
