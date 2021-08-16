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

class App extends Component{
  render() {
    return (<section className={style.gridContainer}>
      <Router>
        <Switch>
          {/* Home */}
          <Route exact path='/'>
            <Header/>
            <Intro/>
            <Footer/>
          </Route>
          {/* Sobre */}
          <Route exact path='/sobre'>
            <Header/>
            <SobreNos/>
            <Footer/>
          </Route>
          {/* Contato */}
          <Route exact path='/contato'>
            <Header/>
            <Forms/>
            <Footer/>
          </Route>
          {/*404*/}
          <Route exact path='/404'>
          <Header/>
          <NotFoundPages/>
          <Footer/>
          </Route>
          <Redirect to='/404'/>
        </Switch>
      </Router>
      </section>);
  }
}

export default App;
