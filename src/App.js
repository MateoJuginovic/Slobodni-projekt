import React from 'react';
import './App.css';
import Header from './Header';
import Footer from './Footer';
import Naslovna from './Components/Naslovna';
import Prva from './Components/Prva';
import Druga from './Components/Druga';
import Treca from './Components/Treca';
import{
  Route,BrowserRouter as Router
} from 'react-router-dom';


function App() {
  return (
    <div className="App">
      
    <Header></Header>

    <Router>
    
    <Route exact path='/' component={Naslovna}></Route>
    <Route path="/Prva" component={Prva}></Route>
    <Route path="/Druga" component={Druga}></Route>
    <Route path="/Treca" component={Treca}></Route>

    
    </Router>

    <Footer></Footer>

    </div>
  );
}

export default App;
