import React from 'react';
import {FiFrown} from 'react-icons/fi';
import '../Sucesso/styles.css';

export default function CadastroErro(){
    return(
        <div className="errostyle-container">
        <div className="content">
            <h1>Ocorreu erro no cadastro</h1>
            <FiFrown className="iconerro" size={60} color="#f00726"/>
            <button className="btnerro" type="submit">X</button>
        </div>
        
    </div>
    );
}