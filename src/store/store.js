import {createStore,applyMiddleware} from "redux";
import * as actions from './action'
import createSagaMiddleware from 'redux-saga'

let currentId = 2;
// 初始化数据
const initialState = {
    toDoList: [{
            id:1,
            listname: 'coding'
        },
        {   
            id:2,
            listname: 'studying'
        }
    ]
}


// reducer
const listReducer = function (state = initialState, action) {
    switch (action.type) {
        case actions.addToStore: {
            currentId ++;
            return {
                ...state,
                toDoList: [...state.toDoList, {id:currentId,listname:action.payload.listname}]
            }
        }

        case actions.delToStore: {
            return {
                toDoList:state.toDoList.filter((item)=>{
                    return item.id !== action.payload.id
                })
            }
        }

        default:
            return state;
    }
}

// 合并reducer
// const allReducers = {
//     products: productsReducer,
//     shoppingCart: cartReducer
// }

// const rootReducer = combineReducers(reducer);用来合并reducer

let store = createStore(listReducer);


// saga使用

// const sagaMiddleware = createSagaMiddleware()

// const store = createStore(
//     listReducer,
//   applyMiddleware(sagaMiddleware)
// )

// 监听store
let unsubscribe = store.subscribe(() =>
    console.log(store.getState())
);

export {store} 