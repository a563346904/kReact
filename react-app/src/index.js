/*
 * @Author: your name
 * @Date: 2020-12-28 14:24:39
 * @LastEditTime: 2020-12-30 14:23:52
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \learn\kReact\react-app\src\index.js
 */
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import reportWebVitals from './reportWebVitals';
import store from './store/ReduxStore.js'
import { Provider } from 'react-redux'


ReactDOM.render(
  <Provider store={ store }>
    <App />
  </Provider>,
  document.getElementById('root')
);
// store.subscribe(() => {
//   ReactDOM.render(
//     <App />,
//     document.getElementById('root')
//   );
// })



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
