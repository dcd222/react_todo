import React from 'react'
import hljs  from 'highlight.js'
import 'highlight.js/styles/github.css';
import  './md.css'
import {connect} from 'react-redux'
import { bindActionCreators } from 'redux';
import * as actions from './action';

const marked = require('marked')

class MDEditor extends React.Component{
        
    
    render(){
        const {textArea,actions}  = this.props;//将props中的actions和toDoLits取出来  
        marked.setOptions({
            renderer: new marked.Renderer(),
            pedantic: false,
            highlight: function(code) {
                return hljs.highlightAuto(code).value;
            },
            gfm: true,
            tables: true,
            breaks: false,
            sanitize: false,
            smartLists: true,
            smartypants: false,
            xhtml: false
        });
        return(
            <div className='mdEditor'>
                <textarea onChange={(e)=>actions.onChange(e)}></textarea>
                <div className='showArea' dangerouslySetInnerHTML = {{__html:marked(textArea)}}></div>
            </div>   
        )
    }
}

export default connect(//生成容器组件
    state => state.mdReducer,//建立state和组件props映射关系
    dispatch => ({ actions: bindActionCreators(actions, dispatch) }),//把action绑定到connect中
)(MDEditor);
// export default MDEditor