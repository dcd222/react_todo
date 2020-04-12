// action
export const addToStore = 'addToStore';
export const delToStore = 'delToStore';
export const todoLitsinput = 'todoLitsinput';
export const initTodolist = 'initTodolist';
// export const todoLitsinput = 'mdText';


// export function addData(listname) {
//     return {
//         type: addToStore,
//         payload: {
//             listname
//         }
//     }
// }
export function addData(listname) {
    return function (dispatch, getState) {
        return(
            fetch('/api?type=add&listname=\''+listname+'\'').then(res=>res.json()).then(res=>{
                console.log(res)
                const {code,id} = res
                if(code !== 200){
                    alert('添加失败')
                }else{
                    dispatch({
                        type: addToStore,
                        payload: {
                            listname:listname,
                            id:id
                        }
                    })
                }
                
                
            })
        )  
    }
}
// export function delData(id) {
//     return {
//         type: delToStore,
//         payload: {
//             id
//         }
//     }
// }

export function delData(id) {
    return function (dispatch, getState) {
        return(
            fetch('/api?type=del&id='+id).then(res=>res.json()).then(res=>{
                console.log(res)
                const {code} = res
                if(code !== 200){
                    alert('删除失败');
                }else{
                    dispatch({
                        type: delToStore,
                        payload: {
                            id:id
                        }
                    })
                }
            })
        )  
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
    return function (dispatch, getState) {
            return(
                fetch('/api').then(res=>res.json()).then(res=>{
                    const data = res.msg
                    console.log(data)
                    dispatch({
                        type: initTodolist,
                        payload: {data:data}
                    }) 
                })
            )
                
    }
}