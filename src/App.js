import React, {Component} from 'react'
import style from './App.module.css';
import Header from './components/Header/Header';
import Intro from './components/Intro/Intro';
import Footer from './components/Footer/Footer';


/*import Forms from './components/Forms/Forms' */
/* import SobreNos from './components/SobreNos/SobreNos' */

class App extends Component{
  render() {
    return (<section className={style.gridContainer}>
        <Header/>
        <Intro/>
        {/* <Forms/> */}
        {/* <SobreNos/> */}
        <Footer/>
      </section>);
  }
}

export default App;
