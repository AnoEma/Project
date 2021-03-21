import React,{useState} from 'react';
import {Link, useHistory} from 'react-router-dom';
import {FiArrowLeft} from 'react-icons/fi';
import api from '../../services/api';
import MaskedInput from 'react-text-mask';

import './styles.css';


export default function Cadastrar(){
  const [nome, setNome] = useState('');
  const [sobreNome, setSobreNome] = useState('');
  const [email, setEmail] = useState('');
  const [celular, setCelular] = useState('');
  const [cidade, setCidade] = useState('');
  const [uf, setUf] = useState('');
  const [senha, setSenha] = useState('');
  const [confirmaSenha, setConfirmaSenha] = useState('');
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
    const pattern= new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
    if(senha != confirmaSenha || senha == undefined || confirmaSenha == undefined){
      return alert('Verificar a Senha!');
    }

    if(!pattern.test(email)){
     return alert('E-mail invalido!');
    }

    try{
      await api.post('cadastro-cliente', data);
      history.push({
        pathname: '/validar-cadastro',
        email: data.email
      });
      
     } catch(err){
        history.push({
          pathname: '/erro'
        });
     }
  }


  return(
    <div className="globalstyle-container">
      <div className="content">
        <section className="form">
          <h1>Cadastro</h1>
          <p>Faça seu cadastro</p>
          <Link className="back-link" to="/login" color="f7f5f5">
            <FiArrowLeft size={18} color="#ffffff"/>
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
          <MaskedInput 
          mask={['(', /[0-9]/, /\d/,')',' ', /\d/, /\d/, /\d/, /\d/,/\d/, '-', /\d/, /\d/, /\d/, /\d/]}
          placeholder="Celular"
          value={celular}
          onChange={e => setCelular(e.target.value.replace(/[-\\^$*+?.()|[\]{}' ']/g, ''))}
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
          <input 
          placeholder="Confirma Senha" type="password"
          value={confirmaSenha}
          onChange={e => setConfirmaSenha(e.target.value)}
          />
          <div className="input-checkbox">
          <label className="checkbox">
              <input className="teste" name="checkbox" onClick={e => setAceitarReceberEmail(e.target.value = true)}
               id="checkbox" type="checkbox" style={{width:20}}/>
            Aceita Receber Email
          </label>
          </div>
          <button className="button" type="submit">Cadastrar</button>
        </form>
      </div>
    </div>
  );
}