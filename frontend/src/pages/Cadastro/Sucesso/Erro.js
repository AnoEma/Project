import React from 'react';
import {useHistory} from 'react-router-dom';
import {FiFrown} from 'react-icons/fi';
import '../Sucesso/styles.css';

export default function CadastroErro(){
    const history = useHistory();

    function handbtnErro(){
        history.push('/cadastro-cliente');
    }

    return(
        <div className="errostyle-container">
        <div className="content">
            <h1>Ocorreu erro no cadastro</h1>
            <FiFrown className="iconerro" size={60} color="#f00726"/>
            <button className="btnerro" onClick={handbtnErro} type="submit">X</button>
        </div>
        
    </div>
    );
}