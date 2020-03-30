import React from 'react';
import './App.css';

class ToDoList extends React.Component{
  render(){
    return(
      <ul>
        {
          this.props.todo.map((item,i)=>{
            return (
              <li key={i}>
                <label>{item}</label>
                <button onClick={()=>this.props.delData(i)}>delete</button>
              </li>
            )
          })
        }
      </ul>
    );
  }
}

class App extends React.Component{
  constructor(props) {
    super(props);
    this.input = React.createRef()
    this.state = {
      data:[]
    };
  }
  delData =(index)=>{
    var arr = this.state.data
    arr.splice(index,1)
    this.setState({
      data:arr
    })
  }
  addData(){
    var arr = this.state.data
    arr.push(this.input.current.value)
    this.setState({
      data:arr
    })
  }
  render(){
    return (
      <div className="App">
        <p className='title'>TO DO</p>
        <input ref={this.input}/>
        <button onClick={()=>this.addData()}>add</button>
        <ToDoList todo={this.state.data} delData={this.delData}/>
      </div>
    );
  }
}

export default App;
