// action
export const addToStore = 'addToStore';
export const delToStore = 'delToStore';
export const todoLitsinput = 'todoLitsinput';
export const initTodolist = 'initTodolist';
// export const todoLitsinput = 'mdText';


export function addData(listname) {
    return {
        type: addToStore,
        payload: {
            listname
        }
    }
}

export function delData(id) {
    return {
        type: delToStore,
        payload: {
            id
        }
    }
}

export function onChange(e) {
    return {
        type: todoLitsinput,
        components: 'listReducer',
        payload: {
            value:e.target.value
        }
    }
}

export function init(){
    var list;
    fetch('/api').
    then(res => res.json()).then(res=>list = res.msg)
    return  {
        type: initTodolist,
        payload:{
            data: list
        }
    };
}