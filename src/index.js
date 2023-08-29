import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Ravi from './Ravi';
import List from './Todo/List';
import Props from './Props';
import Model from './card/Model';
import FunTodo from './Todo/FunTodo';
import Design from './Task.js/Design';
import Useref from './Useref';
import FunTodoser from './TodoServer copy/Todo/FunTodoser';

import FunMain from './Fetchtask/FunMain';


  

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <Design/> */}
    {/* <Useref/> */}

    
    {/* <Ravi/> */}
    {/* <Props/> */}
    {/* <Model/> */}
    {/* <FunTodo/> */}
    {/* <FunTodoser/> */}

    
    <FunMain/>




    {/* <List name={"ravi"}/> */}

    {/* <App /> */}
   
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
