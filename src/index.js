import React from 'react';
import ReactDOM from 'react-dom/client';
// import HelloWorld from './helloworld/HelloWorld'
// import FormField  from "./form/textField";
import FruitList from './fruits/fruitslist';
import './index.css';
import Counter from './counter/counter';
import Event from './events/Event';
import Form from "./form/form";
// import App from './App';
// import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <HelloWorld lastname="abdessamad" age={21}/>
    <HelloWorld lastname="kamal" age={32}/>
    <HelloWorld lastname="yassine" age={37}/>
    <FormField inputName="firstName" inputLabel="first name" >
      veuillez saisir voutr prenom
    </FormField>
    <FormField inputName="lastName" inputLabel="last name" /> */}
    <FruitList />
    {/* <Counter initialValue={31} step={3} /> */}
    {/* <Form /> */}
    {/* <Event /> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
