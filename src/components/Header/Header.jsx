
import React from 'react';
import Btn from '../Btn/Btn';
import './Header.css';

const Header = () => {
    return (
        <div className="componenteHeader">
            <Btn valor="" text="Home"/>
            <Btn valor="login" text="Login"/>
            <Btn valor="profile" text="Profile"/>
        </div>
    );
};

export default Header;