import ButtonWithCustomError from "./ButtonWithCustomError";
import ButtonWithTypeError from "./ButtonWithTypeError";
import ButtonWithAsyncError from "./ButtonWithAsyncError";

import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <p>
        <ButtonWithCustomError />
      </p>
      <p>
        <ButtonWithTypeError />
      </p>
      <p>
        <ButtonWithAsyncError />
      </p>
    </div>
  );
}

export default App;
