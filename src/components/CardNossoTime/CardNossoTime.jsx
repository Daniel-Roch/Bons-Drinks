import React, { Component } from 'react'
import style from './CardNossoTime.module.css'
import iconSeta from '../../assents/iconSeta.png'

export default class CardNossoTime extends Component {
    constructor(props){
        super(props)
        this.state ={
            openCard : false
        }
    }
    openClosed = () =>{
        this.state.openCard ? this.setState({openCard : false}) : this.setState({openCard : true}) 

    }
    render() {
        return (
            <article className={style.cardArticle}>
                <img className={style.imgCard} src={this.props.src} alt={this.props.alt}/>
                <article className={style.butArticle}>
                    <button onClick={this.openClosed} className={style.btnCard}>
                        <p className={style.nomeCard}>{this.props.text}</p>
                        <img src={iconSeta} 
                        className={`${style.btnImg} ${this.state.openCard && style.btnImgDown}`} 
                        alt="iconSeta" />
                    </button>
                    {this.state.openCard ? <div className={style.descricaoCard}><p>{this.props.children}</p></div>
                    : null}
                </article>
            </article>
        )
    }
}
