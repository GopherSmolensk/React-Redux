import { addManyCustomersAction } from "../store/customerReducer"


export const fetchCustomers = () => {
    // что бы могли использовать эту фунуцию как экшен(action)
    //  т.е прокидываеть её в диспатч dispatch)
    // мы из этой функции должны вернуть новую функцию которая параметром принимает диспатч(dispatch)
    return function(dispatch) {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            // после того как данные получены вызываем диспатч который прокинут через параметры
            // и внего прокинуть actionCreator который мы создали что бы добавить много пользоваетлей
            // и в него передать JSON в данном случае JSON это массив пользоваетелей который пришол от сервера
            .then(json => dispatch(addManyCustomersAction(json)))
    }
}