import React from 'react';
import {Link} from 'react-router-dom';
import '../header/styles.css';


export default function HeaderPage(){
    return(
        <header className="headerstyle-container">
            <div className="content">
            <Link className="back-link" to="/login" color="f7f5f5">
              Login
            </Link>
            </div>
        </header>
    );
}