import React, { Component } from 'react'
import style from './Input.module.css'

export default class Input extends Component {
    render() {
        return (<>
            <label className={this.props.className}>{this.props.children} 
            <input type={this.props.type}
             name={this.props.name}
              value={this.props.value}
               onChange={this.props.onChange}
               checked={this.props.checked}
                className={style.imputForms} />
            </label>
        </>)
    }   
}
