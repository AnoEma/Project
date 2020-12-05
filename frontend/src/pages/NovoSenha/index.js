import React,{useState} from 'react';
import {useHistory} from 'react-router-dom';
import '../Cadastro/styles.css';
import api from '../../services/api';



export default function NovoSenhaRecuperado(props){
    const email = props.location.email;
    const [senha,setSenha] = useState('');
    const history = useHistory();

    async function handNovoSenha(e){
      e.preventDefault();
      try{
         await api.post('novo-senha', {email, senha});
         alert('A senha foi alterado com sucesso');
         history.push('/');
      } catch(err){
        alert('Erro não foi possivel recuperar a senha');
      }
    }

  return(
    <div className="globalstyle-container">
      <div className="content">
        <section>
          <h1>Recuperar a Senha</h1>
          <p>Informa a nova Senha</p>
        </section>
        <form onSubmit={handNovoSenha}>
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