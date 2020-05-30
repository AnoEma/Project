import React from 'react';
import {Link} from 'react-router-dom';
import {FiArrowLeft} from 'react-icons/fi';
import './styles.css';
import { useState } from 'react';

export default function EsqueceSenha(){
    const [email,setEmail] = useState('');

  return(
    <div className="cadastro-container">
      <div className="content">
        <section>
          <h1>Cadastro</h1>
          <p>Faça seu cadastro</p>
          <Link className="back-link" to="/">
            <FiArrowLeft size={16} color="#E02041"/>
              Volta na Pagina inicial
          </Link>
        </section>
        <form>
        <input 
          placeholder="E-mail"
          // value={email}
          // onChange={e => setEmail(e.target.value)}
          />
           <button className="button" type="submit">Cadastar</button>
        </form>
      </div>
    </div>
  );
}