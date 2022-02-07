const obj = {};

function throwTypeError() {
  obj.nothing();
}

function ButtonWithTypeError() {
  return (
    <button onClick={throwTypeError}>Throw TypeError</button>
  );
}

export default ButtonWithTypeError;
