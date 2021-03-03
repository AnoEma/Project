import React from 'react';
import {useHistory} from 'react-router-dom';
import {FiSmile} from 'react-icons/fi';
import '../Sucesso/styles.css';

export default function CadastroSucesso(){

    const history = useHistory();

    function handbtnSucesso(){
        history.push('/login');
    }
    
    return(
        <div className="sucessostyle-container">
        <div className="content">
            <h1>Cadastro realizado com sucesso</h1>
            <FiSmile className="iconsucesso" size={60} color="#80e34b"/>
            <button className="btnsucesso" onClick={handbtnSucesso} type="submit">OK</button>
        </div>
    </div>
    );
}