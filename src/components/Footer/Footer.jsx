import React, { Component } from 'react'
import style from './Footer.module.css'

export default class Footer extends Component {
    render() {
        return (
        <footer className={style.footer}>
            <h2 className={style.infFooter}> Resilia 2021 - Alguns direitos reservados</h2>
        </footer>
        )
    }
}

