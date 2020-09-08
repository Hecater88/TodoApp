//estado inicial del TODO
const initialState = [{
    id:1,
    todo:'Comprar pan',
    done: false
}];

//Definicion de Reducer
const todoReducer = (state = initialState, action) => {

    if(action?.type === 'agregar'){
        return [...state, action.payload];
    }

    //siempre tiene que devolver un estado
    return state;
}

let todos = todoReducer();

//inicializacion del nuevo estado
const newTodo = {
    id:2,
    todo: 'Comprar leche',
    done: false
}

//action para agregar el nuevo estado
const agregarTodoAction = {
    type: 'agregar',
    payload: newTodo
}

//mandamos la acción al reducer
todos = todoReducer(todos, agregarTodoAction);

console.log(todos);