import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import {createStore} from 'redux' 


// создаём action = это JS объект у которого обязатьльно должно быть свойство
// type по которму определяется как менять состояние(state)
// также можно передать любое кол-во данных 
// чаще это payload
// action = {
//   type: '',
//   payload: '?',
// }

// дефолтное состояние(чаще всего это объект, но может быть массив и т.д
const defaultState = {
  // дефолтное состояние когда мы открыли приложение
  cash: 42,
  
}

// создам редюсер = это обычная JS функция
// принимает два параметра state(состояние) и action(как менять состоянеие)
const reducer = (state = defaultState, action) => {
  // вся логика закдючется в том, что какой action был
  // проброшен в функцию
  // поэтому создаётся конструкция swwitch/case которая 
  // отслеживает type проброшенго в action
  switch (action.type) {
    // у нас есть 2 action добавить или снять cash
    // для каждого создаётся case
    case "ADD_CASH":
      // изнаяально в redux состояние неизменяемо
      // т.е мы всегда должны возвращать новый объект
      // с помощью спред оператора добаляем в него старое состояние
      // 
      return {...state, cash: state.cash + action.payload}

    case "GET_CASH":
      return {...state, cash: state.cash - action.payload}

      // по дефолту эта конструкция должна возвращать state(состояние)
    // т.е если приходит action с type который не обрабатывается
    // то мы возвращаем перевоначальный state(состояние)
    default:
      return state
  }
}

// создаём стор
const store = createStore(reducer)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  // </React.StrictMode>
);
