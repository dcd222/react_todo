import {createStore,applyMiddleware,combineReducers} from "redux";
import createSagaMiddleware from 'redux-saga'
import {listReducer} from '../redux/reducer'
import {mdReducer} from '../markdown/reducer'



// reducer


// 合并reducer
// const allReducers = {
//     listReducer: listReducer,
//     mdReducer: mdReducer
// }

const rootReducer = combineReducers({mdReducer,listReducer});
// 用来合并reducer
let store = createStore(rootReducer);

// saga使用

const sagaMiddleware = createSagaMiddleware()

// const store = createStore(
//     listReducer,
//   applyMiddleware(sagaMiddleware)
// )

// 监听store
let unsubscribe = store.subscribe(() =>
    console.log(store.getState())
);

export {store} 