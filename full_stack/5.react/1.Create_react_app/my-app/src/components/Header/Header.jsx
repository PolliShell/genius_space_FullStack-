import React from 'react';
import classes from'./Header.module.css';

const Header = () => {
    return (
        <header className={classes.header}>
            |<img src="https://www.mozilla.org/media/protocol/img/logos/firefox/browser/logo-lg-high-res.fbc7ffbb50fd.png"></img>
        </header>
    );
}

export default Header;