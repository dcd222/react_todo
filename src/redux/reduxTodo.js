
import React from 'react';
import '../css/app.css';
import {connect} from 'react-redux'
import { bindActionCreators } from 'redux';
import * as actions from './action';


// todo 类
class ReduxTodo extends React.Component{


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
      const {actions,toDoList,input}  = this.props;//将props中的actions和toDoLits取出来
      return (
        <div className="App">
          <p className='title'>TO DO(redux)</p>
          <input onChange={(e)=>actions.onChange(e)}></input>
          <button onClick={()=>actions.addData(input)}>add</button>
          {this.todoList(toDoList,actions.delData)}
        </div>
      );
    }
  }
export default connect(//生成容器组件
    state => state.listReducer,//建立state和组件props映射关系
    dispatch => ({ actions: bindActionCreators(actions, dispatch) }),//把action绑定到connect中
)(ReduxTodo);


// 取消监听
// unsubscribe();
