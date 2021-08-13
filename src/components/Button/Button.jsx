import React, {Component} from 'react'
import style from './Btn.module.css'

export default class Btn extends Component{
    /* Não é obrigatorio, só se tiver outro this.
    constructor(props){
        super(props)
    } */
    /* onClick = () =>{
        console.log('mouse está dentro')
        onMouseEnter={this.onClick}
    } */
    render(){
        return(<button className={`${style.btn} ${this.props.className}`}
                onClick={this.props.onClick}>{this.props.children}</button>);
    }
}