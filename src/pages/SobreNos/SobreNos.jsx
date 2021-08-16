import React, { Component } from 'react'
import picAbout from '../../assents/about-pic.jpg'
import style from './SobreNos.module.css'

export default class SobreNos extends Component {
    render() {
        return (<>
            <section className={style.sectionSobreNos}>
                <h1 className={style.titleForms}>Sobre Nós</h1>
                <img src={picAbout} className={style.imgSobreNos} alt="imgSobre"/>
                <p className={style.textSobreNos}>Mussum Ipsum, cacilds vidis litro abertis. Posuere libero varius. Nullam a nisl ut ante blandit hendrerit. Aenean sit amet nisi. 
                Si u mundo tá muito paradis? Toma um mé que o mundo vai girarzis! In elementis mé pra quem é amistosis quis leo. Todo mundo vê os porris que eu tomo, 
                mas ninguém vê os tombis que eu levo! Leite de capivaris, leite de mula manquis sem cabeça. Tá deprimidis, eu conheço uma cachacis que pode alegrar sua vidis. 
                Sapien in monti palavris qui num significa nadis i pareci latim. Não sou faixa preta cumpadi, sou preto inteiris, inteiris.Interessantiss quisso pudia ce receita de bolis, mais bolis 
                eu num gostis. Quem num gosta di mim que vai caçá sua turmis! Paisis, filhis, espiritis santis. Admodum accumsan disputationi eu sit. Vide electram sadipscing et per.</p>
            </section>
        </>)
    }
}
