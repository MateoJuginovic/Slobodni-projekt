import React from 'react';
import {Link} from 'react-router-dom';
import Slika from './karijera1.png';
import Slika2 from './karijera2.png';
import Slika3 from './karijera3.png';
import Slika4 from './karijera4.png';

function Druga() {
    return (
      <div className="Druga">

      <div id="Navigation">
        <div class="Nav"><Link to='/'><h6>Naslovna</h6></Link><br></br></div>
        <div class="Nav"><Link to='/Prva'><h6>Raniji život</h6></Link><br></br></div>
        <div class="Nav"><Link to='/Treca'><h6>Privatni život</h6></Link><br></br></div>
      </div><br></br>

        <div class="Section">
          <img src={Slika} id="karijera1"></img>

          <h2>SolarCity</h2>

          <p>Musk provided the initial concept and financial capital for SolarCity, which was then co-founded in 2006 by his cousins Lyndon and Peter Rive. By 2013, SolarCity was the second largest provider of solar power systems in the United States. SolarCity was acquired by Tesla, Inc. in November 2016 and is currently a wholly owned subsidiary of Tesla.<br></br><br></br>

          The underlying motivation for funding both SolarCity and Tesla was to help combat global warming. In 2012, Musk announced that SolarCity and Tesla would collaborate to use electric vehicle batteries to smooth the impact of rooftop solar on the power grid, with the program going live in 2013.

          </p>

        </div>

        <div class="Section">
        <img src={Slika2} id="karijera2"></img>

        <h2>PayPal</h2>

        <p>In March 1999, Musk co-founded X.com, an online financial services and e-mail payment company, with US$10 million from the sale of Zip2. One year later, the company merged with Confinity, which had a money-transfer service called PayPal. The merged company focused on the PayPal service and was renamed PayPal in 2001. Musk was ousted in October 2000 from his role as CEO (although he remained on the board) due to disagreements with other company executives over his desire to move PayPal's Unix-based infrastructure to a Microsoft one.<br></br><br></br>
          
        In October 2002, PayPal was acquired by eBay for US$1.5 billion in stock, of which Musk received US$165 million. Before its sale, Musk, who was the company's largest shareholder, owned 11.7% of PayPal's shares. In July 2017, Musk purchased the domain X.com from PayPal for an undisclosed amount, stating that it has sentimental value to him.</p>
        
        </div>

        <div class="Section">
          <img src={Slika3} id="karijera3"></img>

          <h2>SpaceX</h2>

          <p>Space Exploration Technologies Corp., trading as SpaceX, is an American aerospace manufacturer and space transportation services company headquartered in Hawthorne, California. It was founded in 2002 by Elon Musk with the goal of reducing space transportation costs to enable the colonization of Mars. SpaceX has developed several launch vehicles, the Starlink satellite constellation, and the Dragon spacecraft. It is widely considered among the most successful private spaceflight companies.</p>

        </div>

        <div class="Section">
        <img src={Slika4} id="karijera4"></img>

        <h2>Tesla</h2>

        <p>Tesla, Inc. (formerly Tesla Motors, Inc.), is an American electric vehicle and clean energy company based in Palo Alto, California. The company specializes in electric vehicle manufacturing, battery energy storage from home to grid scale and, through its acquisition of SolarCity, solar panel and solar roof tile manufacturing.<br></br><br></br>

        Tesla operates multiple production and assembly plants, such as: its main vehicle manufacturing facility at Tesla Factory in Fremont, California; Giga Nevada near Reno, Nevada; Giga New York in Buffalo, New York; and Giga Shanghai in Shanghai, China.<br></br><br></br>

        As of 2020, Tesla sells Model S, Model 3, Model X, and Model Y cars. Tesla also sells Powerwall, Powerpack, and Megapack batteries, solar panels, solar roof tiles, and some related products.</p>
        
        </div>
        
      </div>
    );
  }
  
  export default Druga;