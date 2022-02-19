function throwAsyncError() {
  new Promise((res, rej) => {
    setTimeout(() => {
      rej(new Error(`Async Error ${process.env.REACT_APP_VERSION}`));
    }, 10);
  });
}

function ButtonWithAsyncError() {
  return (
    <button onClick={throwAsyncError}>Throw Async Error</button>
  );
}

export default ButtonWithAsyncError;
