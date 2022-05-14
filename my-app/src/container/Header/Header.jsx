import React from 'react';

import './Header.css';
import {images} from '../../constants';
import { SubHeading } from '../../components';


const Header = () => (
  <div>

    <div className="app__header app__wrapper section__padding" id='home' >

      <div className='app__wrapper_info'>
        <SubHeading title="Chase the new flavour"/>
        <h1 className='app__header-h1'>The key to fine dining.</h1>
        <p className='header-p' style={{margin: '2rem 0' , width: '100%'}}>ad wd awdawdawd awdawdawdawdawd awdawdd awdawd awdawdawd awda.</p>
        <button className='custom__button'>Explore Menu</button>
      </div>
      <div className='app__wrapper_img'>
        <img src={images.welcome} alt="header-img" />
      </div>

    </div>

  </div>
);

export default Header;
