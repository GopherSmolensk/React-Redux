const defaultState = {
  customers:[],
}

const ADD_CUSTOMER = "ADD_CUSTOMER"
const ADD_MANY_CUSTOMERS = "ADD_MANY_CUSTOMERS"
const REMOVE_CUSTOMER = "REMOVE_CUSTOMER"

export const customerReducer = (state = defaultState, action) => {
    switch (action.type) {

      // новый action на создание новых пользоваетлей
      case ADD_MANY_CUSTOMERS: 
      return {
        // возвращаем новый объект состояния
        ...state,
        // в него разварачиваем старое состояние 
        customers: [
          // в которм будем менять массив customers который уже есть
          ...state.customers,
          // а затем разварачиваем массив который прелетит от сервера
          ...action.payload
        ]
      }

      case ADD_CUSTOMER:
        return {...state, customers: [...state.customers, action.payload]}
      case REMOVE_CUSTOMER:
        return {...state, customers: state.customers.filter(customer => customer.id !== action.payload)}
      default:
        return state
    }
  }

// Создание actionCreator = это функция которая принимает данные и возвращает объект экшена(action)
// action = это обычный JS объект у которого обязательно должно быть поле type

export const addCustomerAction = (payload) => ({type: ADD_CUSTOMER, payload})
export const addManyCustomersAction = (payload) => ({type: ADD_MANY_CUSTOMERS, payload })
export const removeCustomerAction = (payload) => ({type: REMOVE_CUSTOMER, payload})