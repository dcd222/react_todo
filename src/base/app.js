import React from 'react';
import '../css/app.css';



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
  reverse(){
    this.setState({
      data:this.state.data.reverse()
    })
    console.log(this.state.data)
  }
  render(){
    // 渲染列表
    function todoList(props,delData){
      return(
        <ul>
          {
            props.map((item,index)=>{
              return (
                <li key={index}>
                  <label>{item}</label>
                  <button onClick={()=>delData(index)}>delete</button>
                </li>
              )
            })
          }
        </ul>
      );
    }
    
    return (
      <div className="App">
        <p className='title'>TO DO(base)</p>
        <input onChange={this.onChange}></input>
        <button onClick={this.addData}>add</button>
        <button onClick={()=>this.reverse()}>reverse</button>
        {todoList(this.state.data,this.delData)}
      </div>
    );
  }
}

export default App;
