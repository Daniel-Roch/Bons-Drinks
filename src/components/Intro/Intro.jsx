import React, { Component } from 'react'
import style from './Intro.module.css'

export default class Intro extends Component {
    render() {
        return (
            <section className={style.imgBonsDrinks}>
                <h1 className={style.titleIntro}>Bons Drinks</h1>
            </section>
        )
    }
}
