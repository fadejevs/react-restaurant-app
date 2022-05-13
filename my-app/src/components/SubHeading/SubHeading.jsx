import React from 'react';
import {images} from '../../constants';


const SubHeading = ({title}) => (
  <div style={{marginBottom: '1.5rem'}}>
    <p className='p__cormorant' style={{marginTop: "1rem"}}>{title}</p>
    <img src={images.spoon} alt="Spoon" className='spoon__img' style={{marginTop: '2rem'}} />
  </div>
);

export default SubHeading;
