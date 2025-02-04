
import { useDispatch, useSelector } from 'react-redux';
import './App.css';



function App() {
  // что бы как то изменить состояние нужен dispatch(диспетчер)
  // получить его в нутри компоненты можно при помощи хука useDispatch
   const dispatch = useDispatch()

  // что бы что то изменить надо сначала получить
  // для это есть хук useSelector
  // параметром он получает функцию, которая в свою очередь принимает state
  // и уже из этого состояния мы получаем нужную переменную
  const cash = useSelector(state => state.cash)
  console.log(cash);
  
  const addCash = (cash) => {
    // поскольку мы будем менять состояние нам нужен dispatch
    // dispatch это функция
    // параметром она принимает action
    dispatch({type: "ADD_CASH", payload: cash})
  }

  const getCash = (cash) => {
    dispatch({type: "GET_CASH", payload: cash})
  }

  const addClient = (cash) => {
    // поскольку мы будем менять состояние нам нужен dispatch
    // dispatch это функция
    // параметром она принимает action
    dispatch({type: "ADD_CASH", payload: cash})
  }

  const getClient = (cash) => {
    dispatch({type: "GET_CASH", payload: cash})
  }

  return (
   <div className='app'>
    <div className='default__state'>{cash}</div>
    <div className='block__btn'>
      <button className='btn' onClick={() => addCash(Number(prompt()))}>Пополнить счёт</button>  
      <button className='btn' onClick={() => getCash(Number(prompt()))}>Снять со счёта</button>  
    </div>    
   </div>
  );
}

export default App;
