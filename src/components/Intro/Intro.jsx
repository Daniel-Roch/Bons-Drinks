import React, { Component } from 'react'
import style from './Intro.module.css'
/* import {ReactComponent as LikeImg} from '../../assents/likeIcon.svg'
<LikeImg/>  -- Dessa forma eu consigo importar imagem sem precisar jogar da forma {} (svg)
consigo também agora fazer funções nele <LikeImg onClick={this.algo}/>*/

export default class Intro extends Component {
    render() {
        return (
            <section className={style.imgBonsDrinks}>
                <h1 className={style.titleIntro}>Bons Drinks</h1>
            </section>
        )
    }
}
