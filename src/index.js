import React from 'react';
import ReactDOM from 'react-dom/client';
// import HelloWorld from './helloworld/HelloWorld'
import 'bootstrap/dist/css/bootstrap.min.css';
// import App from './App';

import reportWebVitals from './reportWebVitals';
import Task from './tp4/task';
import Form from './form/form';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
    <Form/>
  // </React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
