import React from 'react';
import {Link, useHistory} from 'react-router-dom';
import {FiArrowLeft} from 'react-icons/fi';
import '../Cadastro/styles.css';
import { useState } from 'react';
import api from '../../services/api';

export default function ValidarSenhaRecuperado(){
    const [tokenSenha,setTokenSenha] = useState('');
    const history = useHistory();

    async function handValidarSenhaRecuperado(e){
      e.preventDefaul();

      const data = {tokenSenha};
      try {
        await api.post('banco', data);
        history.push('/');
      } catch(err){
        alert('O Teken Incorreto');
      }
    }

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
        <form onSubmit={handValidarSenhaRecuperado}>
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