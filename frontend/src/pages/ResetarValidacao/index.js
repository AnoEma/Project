import React,{useState} from 'react';
import {useHistory} from 'react-router-dom';
import '../Cadastro/styles.css';
import api from '../../services/api';

export default function ValidarSenhaRecuperado(props){
    const [tokenSenha,setTokenSenha] = useState('');
    const history = useHistory();
    const email = props.location.email;

    async function handValidarSenhaRecuperado(e){
      e.preventDefault();

      const data = {tokenSenha};
      try {
        await api.post('validacao', data);
        history.push({
          pathname: '/nova-senha',
          email: email
        });
      } catch(err){
        alert('A Token Incorreto');
      }
    }

  return(
    <div className="globalstyle-container">
      <div className="content">
        <section>
          <h1>Recuperar a Senha de Login</h1>
  <p>Enviaremos o codido da seguração, verificar no E-mail: {email}</p>
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