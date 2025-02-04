import {createStore, combineReducers} from 'redux' 
import { cashReducer } from './cashReducer.js'
import { customerReducer } from './customerReducer.js'


// создаём корневой редьюсер
const rootReducer = combineReducers({
    // передаём значение редбюсеров как ключ значение
    cash: cashReducer,
    customers: customerReducer,
})

// создаём стор
export const store = createStore(rootReducer)