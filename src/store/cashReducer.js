
// дефолтное состояние(чаще всего это объект, но может быть массив и т.д
const defaultState = {
    // дефолтное состояние когда мы открыли приложение
    cash: 42,
  }

const ADD_CASH = "ADD_CASH"
const GET_CASH = "GET_CASH"


// создам редюсер = это обычная JS функция
// принимает два параметра state(состояние) и action(как менять состоянеие)
export const cashReducer = (state = defaultState, action) => {
    // вся логика закдючется в том, что какой action был
    // проброшен в функцию
    // поэтому создаётся конструкция swwitch/case которая 
    // отслеживает type проброшенго в action
    switch (action.type) {
      // по дефолту эта конструкция должна возвращать state(состояние)
      // т.е если приходит action с type который не обрабатывается
      // то мы возвращаем перевоначальный state(состояние)
  
      // у нас есть 2 action добавить или снять cash
      // для каждого создаётся case
      case ADD_CASH:
        // изнаяально в redux состояние неизменяемо
        // т.е мы всегда должны возвращать новый объект
        // с помощью спред оператора добаляем в него старое состояние
        // 
        return {...state, cash: state.cash + action.payload}
  
      case GET_CASH:
        return {...state, cash: state.cash - action.payload}
  
        // по дефолту эта конструкция должна возвращать state(состояние)
      // т.е если приходит action с type который не обрабатывается
      // то мы возвращаем перевоначальный state(состояние)
      default:
        return state
    }
  }