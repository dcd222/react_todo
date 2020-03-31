import React from 'react';
import './app.css';



// todo 类
class App extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      data:[],
      input:''
    };
    this.addData = this.addData.bind(this)
    this.onChange = this.onChange.bind(this);
  }
  // 删除数据
  delData =(index)=>{
    var arr = this.state.data
    arr.splice(index,1)
    this.setState({
      data:arr
    })
  }
  // 添加数据
  addData(){
    var arr = this.state.data
    arr.push(this.state.input)
    this.setState({
      data:arr
    })
  }
  // onchange将input中数据放到state
  onChange(e){
    this.setState({
      input:e.target.value
    })
  }
  render(){
    // 渲染列表
    function todoList(props,delData){
      return(
        <ul>
          {
            props.map((item,i)=>{
              return (
                <li key={i}>
                  <label>{item}</label>
                  <button onClick={()=>delData(i)}>delete</button>
                </li>
              )
            })
          }
        </ul>
      );
    }
    
    return (
      <div className="App">
        <p className='title'>TO DO</p>
        <input onChange={this.onChange}></input>
        <button onClick={this.addData}>add</button>
        {todoList(this.state.data,this.delData)}
      </div>
    );
  }
}

export default App;
