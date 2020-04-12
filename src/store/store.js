import {createStore,applyMiddleware,combineReducers} from "redux";
import thunkMiddleware  from 'redux-thunk';
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

const createStoreWithMdware = applyMiddleware(
    thunkMiddleware,
)(createStore);

const store = createStoreWithMdware(rootReducer);


// 监听store
// let unsubscribe = store.subscribe(() =>
//     console.log(store.getState())
// );

export {store} 