import React, { Component } from 'react'
import style from './TextArea.module.css'

export default class TextArea extends Component {
    render() {
        return (<>
            <label 
            className={this.props.className}
            >{this.props.children} 
            <textarea 
            name={this.props.name}
             value={this.props.value}
              onChange={this.props.onChange}
               className={`${style.imputForms} ${style.textAreaForms}`} />
            </label>
        </>)
    }
}
