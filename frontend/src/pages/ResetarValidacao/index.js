import React,{useState} from 'react';
import {useHistory} from 'react-router-dom';
import '../Cadastro/styles.css';
import api from '../../services/api';

export default function ValidarSenhaRecuperado(){
    const [tokenSenha,setTokenSenha] = useState('');
    const history = useHistory();

    async function handValidarSenhaRecuperado(e){
      e.preventDefault();

      const data = {tokenSenha};
      try {
        await api.post('validacao', data);
        history.push('/nova-senha');
      } catch(err){
        alert('A Token Incorreto');
      }
    }

  return(
    <div className="globalstyle-container">
      <div className="content">
        <section>
          <h1>Recuperar a Senha de Login</h1>
          <p>Enviaremos o codido da seguração, verificar no E-mail</p>
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