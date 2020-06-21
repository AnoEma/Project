import React from 'react';
import {Link, useHistory} from 'react-router-dom';
import {FiArrowLeft} from 'react-icons/fi';
import '../Cadastro/styles.css';
import { useState } from 'react';


export default function NovoSenhaRecuperado(){
    const [email,setEmail] = useState('');
    const [senha,setSenha] = useState('');
    const history = useHistory();

    async function handNovoSenha(e){
      e.preventDefaul();

      const data={
        email,
        senha
      };

      try{
         await applicationCache.post('banco', data);
         history.push('/');
      } catch(err){
        alert('Erro Arnoboys');
      }
    }

  return(
    <div className="globalstyle-container">
      <div className="content">
        <section>
          <h1>Recuperar a Senha</h1>
          <p>Informa Email e a nova Senha</p>
          <Link className="back-link" to="/validacao">
            <FiArrowLeft size={16} color="#E02041"/>
              Volta na Pagina anterior
          </Link>
        </section>
        <form onSubmit={handNovoSenha}>
        <input 
          placeholder="E-mail"
          value={email}
          onChange={e => setEmail(e.target.value)}
          />
          <input 
          placeholder="Nova Senha"
          value={senha}
          onChange={e => setSenha(e.target.value)}
          />
           <button className="button" type="submit">Finalizar</button>
        </form>
      </div>
    </div>
  );
}