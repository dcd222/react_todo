// action
export const addToStore = 'addToStore';
export const delToStore = 'delToStore';
// export const todoLitsinput = 'todoLitsinput';
export const todoLitsinput = 'mdText';

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
        payload: {
            value:e.target.value
        }
    }
}