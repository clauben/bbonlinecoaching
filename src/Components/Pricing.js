import React from 'react'
import "../App.css";
import { Button } from './Button';

import { FaFire } from 'react-icons/fa';
import { BsXDiamondFill } from 'react-icons/bs';
import { GiCrystalize } from 'react-icons/gi';
import { IconContext } from 'react-icons/lib';
import { Link } from 'react-router-dom';

function Pricing() {
  return (
    <IconContext.Provider value={{ color: '#fff', size: 64 }}>
      <div id='prijs' className='pricing__section'>
        <div className='pricing__wrapper'>
          <h1 className='pricing__heading'>Prijs</h1>
          <div className='pricing__container'>
            <Link to='/sign-up' className='pricing__container-card'>
              <div className='pricing__container-cardInfo'>
                <div className='icon'>
                  <FaFire />
                </div>
                <h4>Actie</h4>
                <p>Eerste Maand</p>
                <h3>Online Coaching</h3>
                <h4>€50</h4>
                <ul className='pricing__container-features'>
                <li>Beperkt aantal plaatsen</li>
                </ul>
              </div>
            </Link>
            <Link to='/sign-up' className='pricing__container-card'>
              <div className='pricing__container-cardInfo'>
                <div className='icon'>
                  <BsXDiamondFill />
                </div>
                <h3>Online Coaching</h3>
                <p>per maand</p>
                <h4>€85</h4>
                <ul className='pricing__container-features'>
                  <li>* Wekelijks Contact</li>
                  <li></li>
                  <li>* Continue bijgewerkte calorieën </li>
                  <li>en macronutrienten</li>
                  <li></li>
                  <li>* Continue bijgewerkt </li>
                  <li>Trainingsschema</li>
                  <li></li>
                  <li>* Maandelijks opzegbaar</li>
                </ul>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </IconContext.Provider>
  );
}

export default Pricing
