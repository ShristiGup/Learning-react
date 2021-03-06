import React from 'react';
import Logo from '../../Logo/Logo';
import classes from './SideDrawer.css';
import NavigationItems from '../NavigationItems/NavigationItems';
import Backdrop from '../../UI/Backdrop/Backdrop';
import Aux from '../../../hoc/Auxiliary';

const sideDrawer = (props) => {
   return(
       <Aux>
       <Backdrop show/>
       <div className={classes.SideDrawer}>
<div className={classes.Logo}>
<Logo/>
</div>


<nav>
<NavigationItems/>
</nav>
</div>
</Aux>
   );
}
export default sideDrawer;