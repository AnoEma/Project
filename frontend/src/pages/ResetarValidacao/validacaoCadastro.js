import React, {useState} from 'react';
import api from '../../services/api';
import { useHistory } from 'react-router-dom';


export default function ValidarCadastro(props){
          const [validarCadastro, setValidarCadastro] = useState('');
          const history = useHistory();
          const email = props.location.email;

          async function handValidarCadastro(e){
              e.preventDefault()

              try {
                 const data =  await api.post('validacao-cliente', {validarCadastro});
                   if(data.statusText == "OK"){
                     history.push('/sucesso');
                   }
                         
              } catch (err) {
                   alert('Token Invalido');     
              }
          }

   return(
      <div className="globalstyle-container">
          <div className="content">
             <section>
                 <h1>Finalizar seu Cadastro</h1><br/>
   <p>Enviemos a Token da validação do cadastro no E-mail: {email}</p>      
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