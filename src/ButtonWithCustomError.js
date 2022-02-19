function throwCustomError() {
  throw new Error(`Custom Error ${process.env.REACT_APP_VERSION}`);
}

function ButtonWithCustomError() {
  return (
    <button onClick={throwCustomError}>Throw Custom Error</button>
  );
}

export default ButtonWithCustomError;
