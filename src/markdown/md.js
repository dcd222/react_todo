import React from 'react'
import hljs  from 'highlight.js'
import 'highlight.js/styles/github.css';
import  './md.css'
const marked = require('marked')

class MDEditor extends React.Component{
    constructor(props){
        super(props)
        this.state={
            text:''
        }
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
        this.onChange = this.onChange.bind(this);
    }
    onChange(e){
        this.setState({
            text:e.target.value
        })
        console.log(this.state.text)
    }
    render(){
        return(
            <div className='mdEditor'>
                <textarea onChange={this.onChange}></textarea>
                <div className='showArea' dangerouslySetInnerHTML = {{__html:marked(this.state.text)}}></div>
            </div>   
        )
    }
}
export default MDEditor