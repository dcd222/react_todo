import * as actions from './action'

// 初始化数据
const initialState = {
    textArea:''
}

export const mdReducer = function (state = initialState, action) {
    console.log(action.type)
    switch (action.type) {
        case actions.mdText: {
            return {
                ...state,
                textArea: action.payload.value
            }
        }

        default:
            return state;
    }
}