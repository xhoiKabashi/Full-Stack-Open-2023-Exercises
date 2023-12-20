/* eslint-disable react/prop-types */
const Header = ({ course }) => {
  const { name } = course;
  return (
    <>
      <h2>{name}</h2>
    </>
  );
};

export default Header;
