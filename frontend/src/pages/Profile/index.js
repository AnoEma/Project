import React from 'react';
// import {Link} from 'react-router-dom';
import {BsLock} from 'react-icons/bs';

import './styles.css';


export default function Profile(){


return(
    <div className="profile-container">
        <header className="header-container">
          <h1>teste</h1>
          <BsLock size={20} />
        </header>


        <h1>Hello Xuxa ☺</h1>

    
        <footer className="footer-container">
        <span>
          Desenvolvido com favorite  por <strong>Arnoboy<span className="red">S</span></strong>
        </span>
        </footer>
    </div>
);
}