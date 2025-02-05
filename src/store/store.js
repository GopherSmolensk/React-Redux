import {createStore, combineReducers, applyMiddleware} from 'redux' 
import { cashReducer } from './cashReducer.js'
import { customerReducer } from './customerReducer.js'
import { composeWithDevTools } from '@redux-devtools/extension'
import { thunk } from 'redux-thunk'



// создаём корневой редьюсер
const rootReducer = combineReducers({
    // передаём значение редбюсеров как ключ значение
    cash: cashReducer,
    customers: customerReducer,
})

// создаём стор
export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))