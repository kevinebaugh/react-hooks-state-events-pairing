function Button({ job, icon, votes, handleClick }) {
  return (
    <>
      <button onClick={handleClick}>
        {icon}
        {job}
        {
          votes !== 0 ? ` ${votes}` : ""
        }
      </button>
    </>
  );
}

export default Button;
