import React, {Component} from 'react'
import style from './Header.module.css'

//Link - através do react-router-dom, vou fazer link conforme fiz a rota.
import {Link} from 'react-router-dom'

class Header extends Component{
    render(){
        return(<header className={style.styleHeader}>
                <nav className={style.navHeader}>
                    <Link>Drinks</Link>
                    {/* <a href="http://localhost:3000/drinks">Drinks</a> */}
                    <Link to='/sobre'>Sobre Nós</Link>
                    {/* <a href="http://localhost:3000/sobre">Sobre Nós</a> */}
                    <Link to='/' className={style.bonsDrinks}>Bons Drinks</Link>
                    {/* <a className={style.bonsDrinks} href="http://localhost:3000">Bons Drinks</a> */}
                    <Link>Nosso Time</Link>
                    {/* <a href="http://localhost:3000/NossoTime">Nosso Time</a> */}
                    <Link to='Contato'>Contato</Link>
                    {/* <a href="http://localhost:3000/Contato">Contato</a> */}
                </nav>
            </header>
        );
    }
}

export default Header