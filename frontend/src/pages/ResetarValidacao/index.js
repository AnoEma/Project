import React from 'react';
import {Link} from 'react-router-dom';
import {FiArrowLeft} from 'react-icons/fi';
import '../Cadastro/styles.css';
import { useState } from 'react';

export default function ValidarSenhaRecuperado(){
    const [tokenSenha,setTokenSenha] = useState('');

  return(
    <div className="globalstyle-container">
      <div className="content">
        <section>
          <h1>Recuperar a Senha de Login</h1>
          <p>Enviaremos o codido da seguração, verificar no E-mail</p>
          <Link className="back-link" to="/esqueceu-senha">
            <FiArrowLeft size={16} color="#E02041"/>
              Volta na Pagina anterior
          </Link>
        </section>
        <form>
        <input 
          placeholder="Token"
          value={tokenSenha}
          onChange={e => setTokenSenha(e.target.value)}
          />
           <button className="button" type="submit">Enviar</button>
        </form>
      </div>
    </div>
  );
}