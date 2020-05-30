import React,{useState} from 'react';
import {Link, useHistory} from 'react-router-dom';
import {FiArrowLeft} from 'react-icons/fi';

import './styles.css';


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
    e.preventDefaul();

    const data={
      nome,sobreNome,
      email,celular,
      cidade,uf,
      senha,aceitarReceberEmail
    };

    try{
      const response = await applicationCache.post('cadastro', data);

      alert(`Seu ID de acesso: ${response.data.id}`);
      history.push('/');
     } catch(err){
         alert('Erro no cadastro, tente novamente.');
     }
  }


  return(
    <div className="cadastro-container">
      <div className="content">
        <section>
          <h1>Cadastro</h1>
          <p>Faça seu cadastro</p>
          <Link className="back-link" to="/">
            <FiArrowLeft size={16} color="#E02041"/>
              Já tem cadastro
          </Link>
        </section>
        <form>
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
          <input type="checkbox" value={aceitarReceberEmail} 
          id="aceitarReceberEmail" style={{width:80}}
          onChange={e => setAceitarReceberEmail(e.target.value)}
          />
          <label for="aceitarReceberEmail"> Aceitar Receber E-mail</label>
          </div>
          <button className="button" type="submit">Cadastar</button>
        </form>
      </div>
    </div>
  );
}