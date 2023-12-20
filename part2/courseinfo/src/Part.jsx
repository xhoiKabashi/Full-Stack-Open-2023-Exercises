/* eslint-disable react/prop-types */
const Part = ({ course }) => {
  console.log("Part", course.name);

  const totalExercises = course.parts.reduce(
    (acc, part) => acc + part.exercises,
    0
  );

  console.log(totalExercises);

  return (
    <>
      {course.parts.map((part) => (
        <p key={part.id}>
          {part.name} : {part.exercises}
        </p>
      ))}
      <h4> Total of {totalExercises} exercises</h4>
    </>
  );
};

export default Part;
