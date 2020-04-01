import {store,addData,unsubscribe,delData} from '../store/store'
import React from 'react';
import '../css/app.css';


// todo 类
class ReduxTodo extends React.Component{
    constructor(props) {
      super(props);
      this.state = {
        input:'',
        data:store.getState().toDoList
      };
      this.addData = this.addData.bind(this)
      this.onChange = this.onChange.bind(this);
      
    }
    refresh(){
        this.setState({
            data:store.getState().toDoList
        })
    }
    // 删除数据
    delData =(index)=>{
        store.dispatch(delData(index));
        this.refresh()
    }
    // 添加数据
    addData(){
        store.dispatch(addData(this.state.input));
        this.refresh()
    }
    // onchange将input中数据放到state
    onChange(e){
      this.setState({
        input:e.target.value
      })
    }
    // 渲染列表
    todoList(props,delData){
        return(
            <ul>
            {
                props.map((item,i)=>{
                return (
                    <li key={item.id}>
                    <label>{item.listname}</label>
                    <button onClick={()=>delData(item.id)}>delete</button>
                    </li>
                )
                })
            }
            </ul>
        );
    }
    render(){
      return (
        <div className="App">
          <p className='title'>TO DO(redux)</p>
          <input onChange={this.onChange}></input>
          <button onClick={this.addData}>add</button>
          {this.todoList(this.state.data,this.delData)}
        </div>
      );
    }
  }
  export default ReduxTodo;
  


// 取消监听
// unsubscribe();
