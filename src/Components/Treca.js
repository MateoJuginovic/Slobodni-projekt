import React from 'react';
import {Link} from 'react-router-dom';
import Slika from './privatni1.jpg';
import Slika2 from './privatni2.jpg';

function Treca() {
    return (
      <div className="Treca">

      <div id="Navigation">
        <div class="Nav"><Link to='/'><h6>Naslovna</h6></Link><br></br></div>
        <div class="Nav"><Link to='/Prva'><h6>Raniji život</h6></Link><br></br></div>
        <div class="Nav"><Link to='/Druga'><h6>Karijera</h6></Link><br></br></div>
      </div><br></br>

      <div class="Section">
          <img src={Slika} id="privatni1"></img>

          <h2>Musk Foundation</h2>

          <p>Musk is chairman of the Musk Foundation, which states its purpose is to provide solar-power energy systems in disaster areas as well as other goals. In 2010, the Musk Foundation collaborated with SolarCity to donate a 25 kW solar power system to the South Bay Community Alliance's hurricane response center in Coden, Alabama. In July 2011, the Musk Foundation donated US$250,000 towards a solar power project in Sōma, Japan, a city that had been recently devastated by a tsunami.<br></br><br></br>

          In July 2014, Musk was asked by cartoonist Matthew Inman and William Terbo, the grandnephew of Nikola Tesla, to donate US$8 million toward the construction of the Tesla Science Center at Wardenclyffe. Ultimately, Musk agreed to donate US$1 million toward the project and additionally pledged to build a Tesla Supercharger in the museum car park.<br></br><br></br>

          In January 2015, Musk donated US$10 million to the Future of Life Institute to run a global research program aimed at keeping artificial intelligence beneficial to humanity.</p>

        </div>

        <div class="Section">
        <img src={Slika2} id="privatni2"></img>

        <h2>X Prize Foundation</h2>

        <p>As of 2015, Musk is a trustee of the X Prize Foundation and a signatory of The Giving Pledge.

          In October 2018, in an effort to help solve the Flint water crisis, Musk and the Musk Foundation donated over $480,000 to install new water fountains with filtration systems for access to clean water at all Flint, Michigan schools. As of 2019, approximately 30,000 children in all 12 area schools have free, safe drinking water from the water filtration systems.<br></br><br></br>

          In October 2019, Musk donated US$1 million to '#TeamTrees' a tree planting initiative to plant 20 million trees led by the YouTube community and in collaboration with Arbor Day Foundation.</p>
        
        </div>

        
        
      </div>
  
    );
  }
  
  export default Treca;
  