import React, {useState} from 'react';
import {Link, useHistory} from 'react-router-dom';
import {FiArrowLeft} from 'react-icons/fi';
import '../Cadastro/styles.css';
import api from '../../services/api';



export default function EsqueceSenha(){
    const [email,setEmail] = useState('');
    const history = useHistory();

    async function handEsqueceSenha(e){
      e.preventDefault();

      try{
          await api.post('esquecer-senha', {email});
          history.push({
            pathname:'/validacao',
            email: email
          });
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
            <FiArrowLeft size={20} color="#ffffff"/>
              Volta na Pagina anterior
          </Link>
        </section>
        <form onSubmit={handEsqueceSenha}>
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