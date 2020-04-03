import * as actions from './action'

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
    ],
    input:''
}

export const listReducer = function (state = initialState, action) {
    
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

        case actions.todoLitsinput: {
            return {
                ...state,
                input:action.payload.value
            }
        }

        default:
            return state;
    }
}