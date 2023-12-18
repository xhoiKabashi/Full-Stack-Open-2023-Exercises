function Part({ parts }) {
  return (
    <div>
      <p>{parts.parts[0].name}</p>
      <p>{parts.parts[1].name}</p>
      <p>{parts.parts[2].name}</p>
    </div>
  );
}

export default Part;
