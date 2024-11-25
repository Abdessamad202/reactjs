import React from 'react';
import ReactDOM from 'react-dom/client';
<<<<<<< HEAD
// import HelloWorld from './helloworld/HelloWorld'
// import FormField  from "./form/textField";
import FruitList from './fruits/fruitslist';
import './index.css';
import Counter from './counter/counter';
import Event from './events/Event';
import Form from "./form/form";
import { MyFirstComponent } from './revision/revisionfile';
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
    {/* <FruitList /> */}
    <MyFirstComponent />
    {/* <Counter initialValue={31} step={3} /> */}
    {/* <Form /> */}
    {/* <Event /> */}
  </React.StrictMode>
=======
// import './index.css';
import App from './App';
import Header from './ex1/header'
import reportWebVitals from './reportWebVitals';
// import Table from './ex2/table';
import ListDR from './ex5/ListDR';
import TableTache from './ex5/TableTache';
import Info from './ex5/Info';
import Products from './ex6/products';
import List from './tp3/list';
import Game from './tp3/ex3/task';
import Task from "./tp3/ex3/task"
import Jwix from './tp3/jwix';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
    <Task />
  // </React.StrictMode>
>>>>>>> ec871323f31a504365eff9b691a0b60e87c33579
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
