import React,{useState} from 'react';
import {Link, useHistory} from 'react-router-dom';
import {FiArrowLeft} from 'react-icons/fi';
import api from '../../services/api';

import './styles.css';
// import bugerImg from '../../assets/shop.svg';


export default function Cadastrar(){
  const [nome, setNome] = useState('');
  const [sobreNome, setSobreNome] = useState('');
  const [email, setEmail] = useState('');
  const [celular, setCelular] = useState('');
  const [cidade, setCidade] = useState('');
  const [uf, setUf] = useState('');
  const [senha, setSenha] = useState('');
  const [aceitarReceberEmail, setAceitarReceberEmail] = useState('');
  const history = useHistory();

  async function handCadastrar(e){
    e.preventDefault();

    const data={
      nome,sobreNome,
      email,celular,
      cidade,uf,
      senha,aceitarReceberEmail
    };

    try{
       await api.post('cadastro-cliente', data);
      history.push({
        pathname: '/validar-cadastro',
        email: data.email
      });
     } catch(err){
         alert('Erro no cadastro, tente novamente.');
     }
  }


  return(
    <div className="globalstyle-container">
      {/* <img src={bugerImg} alt="Buger"/> */}
      <div className="content">
        <section className="form">
          <h1>Cadastro</h1>
          <p>Faça seu cadastro</p>
          <Link className="back-link" to="/">
            <FiArrowLeft size={16} color="#E02041"/>
              Já tem cadastro
          </Link>
        </section>
        <form onSubmit={handCadastrar}>
        <input 
          placeholder="Nome"
          value={nome}
          onChange={e => setNome(e.target.value)}
          />
         <input 
          placeholder="SobreNome"
          value={sobreNome}
          onChange={e => setSobreNome(e.target.value)}
          />
           <input 
          placeholder="E-mail"
          value={email}
          onChange={e => setEmail(e.target.value)}
          />
           <input 
          placeholder="Celular"
          value={celular}
          onChange={e => setCelular(e.target.value)}
          />
          <div className="input-group">
          <input 
          placeholder="Cidade"
          value={cidade}
          onChange={e => setCidade(e.target.value)}
          />
          <input style={{width:80}}
          placeholder="Uf" 
          value={uf}
          onChange={e => setUf(e.target.value)}
          />
          </div>
          <input 
          placeholder="Senha" type="password"
          value={senha}
          onChange={e => setSenha(e.target.value)}
          />
          <div className="input-checkbox">
          <label className="checkbox">
              <input name="checkbox" onClick={e => setAceitarReceberEmail(e.target.value = true)}
               id="checkbox" type="checkbox" style={{width:20}}/>
            Aceita Receber Email
          </label>
          </div>
          <button className="button" type="submit">Cadastar</button>
        </form>
      </div>
    </div>
  );
}