import React, { Component } from 'react'
import style from './Erropage.module.css'

export default class NotFoundPages extends Component {
    render() {
        return (
            <div className={style.erroBackg}>
                <h1 className={style.titleFormsErro}>Página não encontrada.</h1>
            </div>
        )
    }
}
