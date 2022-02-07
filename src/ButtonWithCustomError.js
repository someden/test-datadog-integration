function throwCustomError() {
  throw new Error('Custom Error');
}

function ButtonWithCustomError() {
  return (
    <button onClick={throwCustomError}>Throw Custom Error</button>
  );
}

export default ButtonWithCustomError;
