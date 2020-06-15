import React, { Component } from "react";
import {Link} from 'react-router-dom';
import Slika from './slika.jpg';
import Tesla from './slikaa.png';
import SpaceX from './slikaaa.png';
import TBC from './slikaaaa.png';


export class Naslovna extends Component{
  state={
    Ime: "",
    Lozinka: "",
  }
  onSubmit = e =>{e.preventDefault(); console.log("Forma je potvrđena",this.state.ime);}
  render()
    {return (
      <div className="Naslovna">

      <div id="Navigation">
        <div class="Nav"><Link to='/Prva'><h6>Raniji život</h6></Link><br></br></div>
        <div class="Nav"><Link to='/Druga'><h6>Karijera</h6></Link><br></br></div>
        <div class="Nav"><Link to='/Treca'><h6>Privatni život</h6></Link><br></br></div>
      </div><br></br>

      <img src={Slika} id="ImgNaslovna"></img>

      <h1>Elon Musk</h1>

      <p>Elon Musk je inžinjer i izumitelj. Zaslužan je za tvrtke kao što su Tesla, SpaceX, The Boring Company itd. Rođen je 28. lipnja 1971. godine u gradu Pretoria, Južna Afrika, a živi u SAD-u gdje radi na svojim idejama i izumima.</p><br></br><br></br>

      <a href="https://www.tesla.com/"><img src={Tesla} height="150px" width="100px"></img></a>
      <a href="https://www.spacex.com/"><img src={SpaceX} height="100px" width="150px"></img></a>
      <a href="https://www.boringcompany.com/"><img src={TBC} height="100px" width="200px"></img></a><br></br><br></br>
        
      <p>Dobrodošao {this.state.Ime}!</p>
      <form onSubmit>
        <input placeholder="Ime" value={this.state.Ime} onChange={e=>this.setState({Ime: e.target.value})}></input><br></br><br></br>
        <input placeholder="Lozinka" value={this.state.Lozinka} onChange={e=>this.setState({Lozinka: e.target.value})}></input><br></br><br></br>
        <button onClick={e=>this.onSubmit(e)}>Prijava</button><br></br><br></br>
      </form>
      </div>
    );
    }
  }
  
  export default Naslovna;
  