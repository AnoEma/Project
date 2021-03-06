import React, {useState} from 'react';
import {Link, useHistory} from 'react-router-dom';
import {FiLogIn} from 'react-icons/fi';
import {BsLock} from 'react-icons/bs';
import api from '../../services/api';
import './styles.css';
import bugerImg from '../../assets/shop.svg';

export default function Login(){
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const history = useHistory();

    async function handLogin(e){
      e.preventDefault();

      try{
          await api.post('login-cliente', {email, senha});
          history.push('/inicial');  
        
      }catch(err){
        alert('Falha no login, tente novamente.');
      }
    }

  return (
   <div className="login-container">
     <img src={bugerImg} alt="Buger"/>
     <section className="form">
      <form onSubmit={handLogin}>
       <h1>Welcome</h1>

       <input placeholder="E-mail Address" value={email} 
        onChange={e => setEmail(e.target.value)}/>

       <input type="password" placeholder="☺☺☺☺" value={senha} 
        onChange={e => setSenha(e.target.value)}/>

       <button className="button" type="submit">Login</button>

       <Link className="back-link" to="/cadastro-cliente">
       <FiLogIn size={18} color="#E02041"/>
        Cadastrar</Link>
       <Link className="back-link" to="/esqueceu-senha">
        <BsLock size={18} color="#E02041"/>
         Esquecer Senha</Link>
      </form>
     </section>
   </div>
  );
}