import React, {useState} from 'react';
import api from '../../services/api';
import { useHistory } from 'react-router-dom';


export default function ValidarCadastro(){
          const [validarCadastro, setValidarCadastro] = useState('');
          const history = useHistory();

          async function handValidarCadastro(e){
              e.preventDefault()

              try {
                   await api.post('validacao-cliente', {validarCadastro});
                   alert('Cadastro foi realizado com sucesso')
                    history.push('/');     
              } catch (err) {
                   alert('Token Invalido');     
              }
          }

   return(
      <div className="globalstyle-container">
          <div className="content">
             <section>
                 <h1>Finalizar seu Cadastro</h1><br/>
                 <p>Enviaremos a Token da validação de Cadastro no E-mail</p>      
             </section>
             <form onSubmit={handValidarCadastro}>
                <input 
                   placeholder="Token"
                   value={validarCadastro}
                   onChange={e => setValidarCadastro(e.target.value)}
                />
                <button className="button" type="submit">Enviar</button>
             </form>
          </div>
      </div>
  );     
}