import React,{useState} from 'react';
import {useHistory} from 'react-router-dom';
import '../Cadastro/styles.css';
import api from '../../services/api';



export default function NovoSenhaRecuperado(){
    const [email,setEmail] = useState('');
    const [senha,setSenha] = useState('');
    const history = useHistory();

    async function handNovoSenha(e){
      e.preventDefault();
      try{
        alert('A senha foi alterado com sucesso');
         await api.post('novo-senha', {email, senha});
         alert('A senha foi alterado com sucesso');
         history.push('/');
      } catch(err){
        alert('Erro não foi posivel recuperar a senha');
      }
    }

  return(
    <div className="globalstyle-container">
      <div className="content">
        <section>
          <h1>Recuperar a Senha</h1>
          <p>Informa Email e a nova Senha</p>
        </section>
        <form onSubmit={handNovoSenha}>
        <input 
          placeholder="E-mail"
          value={email}
          onChange={e => setEmail(e.target.value)}
          />
          <input 
          placeholder="Nova Senha"type="password"
          value={senha}
          onChange={e => setSenha(e.target.value)}
          />
           <button className="button" type="submit">Finalizar</button>
        </form>
      </div>
    </div>
  );
}