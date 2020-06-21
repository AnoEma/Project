import React from 'react';
import {Link, useHistory} from 'react-router-dom';
import {FiArrowLeft} from 'react-icons/fi';
import '../Cadastro/styles.css';
import { useState } from 'react';

export default function EsqueceSenha(){
    const [email,setEmail] = useState('');
    const history = useHistory();

    async function handLogin(e){
      e.preventDefaul();

      const data={email};
      try{
          await applicationCache.post('banco', data);
          history.push('/validacao');
      }catch(err){
        alert('Vai se ferra vacilando');
      }
    }

  return(
    <div className="globalstyle-container">
      <div className="content">
        <section>
          <h1>Recuperar a Senha de Login</h1>
          <p>Digite seu E-mail de Login</p>
          <Link className="back-link" to="/">
            <FiArrowLeft size={16} color="#E02041"/>
              Volta na Pagina anterior
          </Link>
        </section>
        <form onSubmit={handLogin}>
        <input 
          placeholder="E-mail"
          value={email}
          onChange={e => setEmail(e.target.value)}
          />
           <button className="button" type="submit">Enviar</button>
        </form>
      </div>
    </div>
  );
}