import React from 'react';
import './styles.css';
import { useState } from 'react';

export default function ValidarSenhaRecuperado(){
    const [tokenSenha,setTokenSenha] = useState('');

  return(
    <div className="recupera-container">
      <div className="content">
        <section>
          <h1>Recuperar a Senha de Login</h1>
          <p>Enviaremos o codido da seguração, verificar no E-mail</p>
        </section>
        <form>
        <input 
          placeholder="Token"
          // value={tokenSenha}
          // onChange={e => setTokenSenha(e.target.value)}
          />
           <button className="button" type="submit">Enviar</button>
        </form>
      </div>
    </div>
  );
}