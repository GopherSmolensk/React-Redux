
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { addCustomerAction, removeCustomerAction } from './store/customerReducer';
import { fetchCustomers } from './asyncActions/fetchCustomers';



function App() {
  // что бы как то изменить состояние нужен dispatch(диспетчер)
  // получить его в нутри компоненты можно при помощи хука useDispatch
   const dispatch = useDispatch()

  // что бы что то изменить надо сначала получить
  // для это есть хук useSelector
  // параметром он получает функцию, которая в свою очередь принимает state
  // и уже из этого состояния мы получаем нужную переменную
  const cash = useSelector(state => state.cash.cash)
  const customers = useSelector(state => state.customers.customers)
  
  const addCash = (cash) => {
    // поскольку мы будем менять состояние нам нужен dispatch
    // dispatch это функция
    // параметром она принимает action
    dispatch({type: "ADD_CASH", payload: cash})
  }

  const getCash = (cash) => {
    dispatch({type: "GET_CASH", payload: cash})
  }

  
  const addCustomer = (name) => {
    const customer = {
      name,
      id: Date.now(),
    }
    dispatch(addCustomerAction(customer))
  }

  const removeCustomer = (customer) => {
    dispatch(removeCustomerAction(customer.id))
  }


  return (
   <div className='app'>
    <div className='default__state'>Баланс: {cash}</div>
    <div className='block__btn'>
      <button className='btn' onClick={() => addCash(Number(prompt()))}>Пополнить счёт</button>  
      <button className='btn' onClick={() => getCash(Number(prompt()))}>Снять со счёта</button>
      <button className='btn' onClick={() => addCustomer(prompt())}>Добавить клиента</button>
       {/* при событии onClick мы диспатчим ассинхронную функцию(ассинхронный экшен) */}
      <button className='btn' onClick={() => dispatch(fetchCustomers())}>Получить клиетов с сервера</button>    
    </div>    
    {customers.length > 0 ?
      <div>
        {customers.map(customer => 
          <div onClick={() => removeCustomer(customer)} style={{fontSize: "2rem", marginTop: 5}}>
            {customer.name}
          </div>
        )}
      </div>
      :
      <div style={{fontSize: "2rem", marginTop: "20px"}}>
        "Клиенты отсутствуют"
      </div>

    }
   </div>
  );
}

export default App;
