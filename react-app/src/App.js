/*
 * @Author: your name
 * @Date: 2020-12-28 14:24:39
 * @LastEditTime: 2020-12-28 14:37:57
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \learn\kReact\react-app\src\App.js
 */
// import logo from './logo.svg';
import './App.css';
import HelloWord from './pages/HelloWord';

function App() {
  return (
    <div className="App">
      <HelloWord ></HelloWord>
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
