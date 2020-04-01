// action
export const addToStore = 'addToStore';
export const delToStore = 'delToStore';
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