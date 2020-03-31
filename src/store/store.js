import {createStore} from "redux";


let currentId = 2;
// 初始化数据
const initialState = {
    toDoList: [{
            id:1,
            listname: 'coding',
            completed: false
        },
        {   
            id:2,
            listname: 'studying',
            completed: true
        }
    ]
}

const addToStore = 'addToStore';
const delToStore = 'delToStore'
// reducer
const listReducer = function (state = initialState, action) {
    switch (action.type) {
        case addToStore: {
            currentId ++;
            return {
                ...state,
                toDoList: [...state.toDoList, {id:currentId,listname:action.payload.listname,completed:true}]
            }
        }

        case delToStore: {
            currentId ++;
            state.toDoList.slice(1,action.payload.id)
            return {
                
            }
        }

        default:
            return state;
    }
}
// action
function addData(listname) {
    return {
        type: addToStore,
        payload: {
            listname
        }
    }
}

function delData(id) {
    return {
        type: delToStore,
        payload: {
            id
        }
    }
}
// 合并reducer
// const allReducers = {
//     products: productsReducer,
//     shoppingCart: cartReducer
// }

// const rootReducer = combineReducers(reducer);用来合并reducer

let store = createStore(listReducer);

console.log("initial state: ", store.getState());
// 监听store
let unsubscribe = store.subscribe(() =>
    console.log(store.getState())
);

export {store,addData,unsubscribe,delData} 