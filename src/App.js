import React, {Component} from 'react'
import style from './App.module.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';


import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

//Pages
import Intro from './pages/Intro/Intro'
import Forms from './pages/Forms/Forms'
import SobreNos from './pages/SobreNos/SobreNos'
import NotFoundPages from './pages/NotFoundPages/Erropage'
import Drinks from './pages/Drinks/Drinks'
import NossoTime from './pages/NossoTime/NossoTime'

class App extends Component{
  render() {
    return (<section className={style.gridContainer}>
      <Router>
      <Header/>
        <Switch>
          {/* Home */}
          <Route exact path="/" children={<Intro/>}/>
          {/* Sobre */}
          <Route exact path='/Sobre'><SobreNos/></Route>
          {/* Contato */}
          <Route exact path='/Contato'><Forms/></Route>
          {/* Drinks */}
          <Route exact path='/Drinks/*'><Drinks/></Route>
          {/*NossoTime*/}
          <Route exact path='/NossoTime'><NossoTime/></Route>
          {/*404*/}
          <Route exact path='*'><NotFoundPages/></Route>
          <Redirect to='/404'/>
        </Switch>
        <Footer/>
      </Router>
      </section>);
  }
}

export default App;
