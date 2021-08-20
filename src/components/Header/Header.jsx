import React, {Component} from 'react'
import style from './Header.module.css'

//Link - através do react-router-dom, vou fazer link conforme fiz a rota.
import {Link} from 'react-router-dom'

class Header extends Component{
    render(){
        return(<header className={style.styleHeader}>
                <nav className={style.navHeader}>
                    <Link to='/Drinks/*'>Drinks</Link>
                    <Link to="/Sobre">Sobre Nós</Link>
                    <Link to='/' className={style.bonsDrinks}>Bons Drinks</Link>
                    <Link to='/NossoTime'>Nosso Time</Link>
                    <Link to='/Contato'>Contato</Link>
                </nav>
            </header>
        );
    }
}

export default Header