import React, { Component } from 'react'
import style from './NossoTime.module.css'
import Card from '../../components/CardNossoTime/CardNossoTime'


export default class NossoTime extends Component {
    render() {
        return (
            <section className={style.containerGrid}>
                <h1 className={style.titleNossoTime}>Nosso Time</h1>
                <Card src="https://avatars.githubusercontent.com/u/81339913?v=4"
                alt="Daniel Rocha" text="Daniel Rocha">Criador do Site em ReactJs</Card>
                <Card src="https://esquinamusical.com.br/wp-content/uploads/2014/04/Mussum-Musica.jpg"
                alt="Antônio Carlos Bernardes" text="Antônio Carlos Bernardes">Mussum Ipsum, cacilds vidis litro abertis. 
                Suco de cevadiss deixa as pessoas mais interessantis. 
                Mé faiz elementum girarzis, nisi eros vermeio. 
                Praesent malesuada urna nisi, quis volutpat erat hendrerit non. 
                Nam vulputate dapibus. Quem manda na minha terra sou euzis!</Card>
                <Card src="https://i.pinimg.com/originals/0c/86/84/0c868454b35d570028dd36c4de67fc5f.jpg"
                alt="Antônio Carlos Bernardes" text="Antônio Carlos Bernardes">Mussum Ipsum, cacilds vidis litro abertis. 
                Suco de cevadiss deixa as pessoas mais interessantis. 
                Mé faiz elementum girarzis, nisi eros vermeio. 
                Praesent malesuada urna nisi, quis volutpat erat hendrerit non. 
                Nam vulputate dapibus. Quem manda na minha terra sou euzis!</Card>
                <Card src="https://i0.wp.com/pipocamoderna.com.br/wp-content/uploads/2019/03/mussum-2.jpg"
                alt="Antônio Carlos Bernardes" text="Antônio Carlos Bernardes">Mussum Ipsum, cacilds vidis litro abertis. 
                Suco de cevadiss deixa as pessoas mais interessantis. 
                Mé faiz elementum girarzis, nisi eros vermeio. 
                Praesent malesuada urna nisi, quis volutpat erat hendrerit non. 
                Nam vulputate dapibus. Quem manda na minha terra sou euzis!</Card>
            </section>
        )
    }
}
