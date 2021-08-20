import React, { Component } from 'react'
import style from './CardDrinks.module.css'

export default class CardDrinks extends Component {
    render() {
        return (
            <div className={style.cardDrink}>
              <p className={style.pDrink}>{this.props.children}</p>
              <img src={this.props.src} alt={this.props.alt} className={style.imgCardDrink}/>
            </div>
        )
    }
}
