import React from 'react';
import burgerLogo from '../../assets/images/burger-logo.png';
import classes from './Logo.module.css';
const Logo = (props) => (
    <div className={classes.Logo}>
        <img src={burgerLogo} alt='Hamburger' />
    </div>
);

export default Logo;