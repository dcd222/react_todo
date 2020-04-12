import * as actions from './action'

// let currentId = 2;
// 初始化数据
const initialState = {
    toDoList: [
    ],
    input:''
}

export const listReducer = function (state = initialState, action) {
    console.log(action)
    switch (action.type) {
        case actions.addToStore: {
            return {
                ...state,
                toDoList: [...state.toDoList, {id:action.payload.id,listname:action.payload.listname}]
            }
        }

        case actions.delToStore: {
            return {
                toDoList:state.toDoList.filter((item)=>{
                    return item.id !== action.payload.id
                })
            }
        }

        case actions.todoLitsinput: {
            return {
                ...state,
                input:action.payload.value
            }
        }

        case actions.initTodolist: {
            return {
                ...state,
                toDoList: action.payload.data
            }
        }

        default:
            return state;
    }
}