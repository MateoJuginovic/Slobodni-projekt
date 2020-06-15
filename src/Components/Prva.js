import React from 'react';
import {Link} from 'react-router-dom';
import Slika from './zivot.jpg';
import Slika2 from './zivot2.jpg';
import Slika3 from './zivot4.jpg';

function Prva() {
    return (
      <div className="Prva">

          <div id="Navigation">
            <div class="Nav"><Link to='/'><h6>Naslovna</h6></Link><br></br></div>
            <div class="Nav"><Link to='/Druga'><h6>Karijera</h6></Link><br></br></div>
            <div class="Nav"><Link to='/Treca'><h6>Privatni život</h6></Link><br></br></div>
          </div><br></br>
            
        <div class="Section">
          <img src={Slika} id="slika1"></img>

          <h2>Početci života</h2>

          <p>Elon Musk was born on June 28, 1971, in Pretoria, Transvaal, South Africa, the son of Maye Musk, a model and dietitian from Regina, Saskatchewan, Canada, and Errol Musk, a South African electromechanical engineer, pilot, and sailor. He has a younger brother, Kimbal (born 1972), and a younger sister, Tosca (born 1974). His maternal grandfather, Dr. Joshua Haldeman, was an American-born Canadian. His paternal grandmother was British, and he also has Pennsylvania Dutch ancestry. After his parents divorced in 1980, Musk lived mostly with his father in the suburbs of Pretoria, a choice made by Musk two years after his parents separated but which he subsequently regretted. Musk is estranged from his father whom he has referred to as "a terrible human being". He has a half-sister and a half-brother.</p>

        </div>

        <div class="Section">
        <img src={Slika2} id="slika2"></img>

        <h2>Djetinjstvo</h2>

        <p>During his childhood, Musk was an avid reader. At the age of 10, he developed an interest in computing with the Commodore VIC-20. He taught himself computer programming and, by the age of 12, sold the code of a BASIC-based video game he created called Blastar to PC and Office Technology magazine for approximately $500. A web version of the game is available online. His childhood reading included Isaac Asimov's Foundation series, from which he drew the lesson that "you should try to take the set of actions that are likely to prolong civilization, minimize the probability of a dark age and reduce the length of a dark age if there is one".</p>
        
        </div>

        <div class="Section">
        <img src={Slika3} id="slika3"></img>

        <h2></h2>

        <p>Musk attended Waterkloof House Preparatory School and Bryanston High School before graduating from Pretoria Boys High School. Although Musk's father insisted that Elon go to college in Pretoria, Musk became determined to move to the United States, saying "I remember thinking and seeing that America is where great things are possible, more than any other country in the world." Knowing it would be easy to get to the United States from Canada, he moved to Canada against his father's wishes in June 1989, just before his 18th birthday, after obtaining a Canadian passport through his Canadian-born mother.</p>
        </div>
      </div>
    );
  }
  
  export default Prva;
  