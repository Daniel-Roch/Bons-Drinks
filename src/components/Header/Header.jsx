import React, {Component} from 'react'
import style from './Header.module.css'

class Header extends Component{
    render(){
        return(<header className={style.styleHeader}>
                <nav className={style.navHeader}>
                    <a href="http://localhost:3000">Drinks</a>
                    <a href="http://localhost:3000">Sobre Nós</a>
                    <a className={style.bonsDrinks} href="http://localhost:3000">Bons Drinks</a>
                    <a href="http://localhost:3000">Nosso Time</a>
                    <a href="http://localhost:3000">Contato</a>
                </nav>
            </header>
        );
    }
}

export default Header