import React, { Component } from 'react'
import style from './Drinks.module.css'
import Card from '../../components/CardDrinks/CardDrinks'
import ImgDrink from '../../assents/gifDrink.gif'

export default class Drinks extends Component {
    constructor(props){
        super(props)
        this.state = {
            drinks: []
        }
    }
    componentDidMount(){
        fetch('https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Cocktail')
        .then(res => res.json()).then(json => this.setState({drinks : json.drinks}))
    }
    render() {
        return (<section className={style.areaCardDrink}>
                    <h1 className={style.titleDrink}>Drinks</h1>
                    {this.state.drinks.length === 0 ? <img src={ImgDrink} alt="Load Drink" className={style.loadCard} /> : null}
                    <div className={style.cardsDrinks}>
                        {this.state.drinks.map((drink)=>{
                            return <Card 
                            key={drink.idDrink} 
                            src={drink.strDrinkThumb} 
                            alt={drink.strDrink}
                            >{drink.strDrink}</Card>
                        })}
                    </div>
            </section>)
    }
}
