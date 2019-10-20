import React from 'react';
import classes from './Toolbar.css';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import DrawerToggle from '../SideDrawer/DrawerToggle/DrawerToggle';

const Toolbar = (props) => (
    <header className={classes.Toolbar}>
        <DrawerToggle onToggleSideDrawer={props.onToggleSideDrawer} />
        <div className={classes.Logo}>
            <Logo />
        </div>
        <nav>
            <NavigationItems/>
        </nav>
    </header>
);

export default Toolbar;