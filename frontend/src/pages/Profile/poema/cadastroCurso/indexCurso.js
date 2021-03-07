import React, {useState} from 'react';
import {Link, useHistory} from 'react-router-dom';
import api from '../../../../services/api';
import {FiArrowLeft} from 'react-icons/fi';

export default function CadastroCurso(){

    const [tipoCurso, setTipoCurso] = useState('');
    const [descricao,  setDescricao] = useState('');
    const history = useHistory();

    async function handAdicionarCurso(e){
        e.preventDefault();

        try{
           const response = await api.post('/cadastro-curso', {tipoCurso, descricao});

           if(response.statusText == "Created"){
               alert('O curso foi adicionando com sucesso.');
               history.push({
                   pathname:'/inicial'
               });
           }
        }catch(err){
            alert('Vai se ferra novamente vacilão');
        }
    }

    return(
        <div className="globalstyle-container">
             <div className="content">
                 <section>
                     <h1>Adicionar tipo do curso</h1>
                     <Link className="back-link" to="/inicial">
                        <FiArrowLeft size={20} color="#ffffff"/>
                            Volta na Pagina anterior
                        </Link>
                 </section>
                <form onSubmit={handAdicionarCurso}>
                    <input placeholder="Tipo de curso"
                     value={tipoCurso}
                     onChange={e => setTipoCurso(e.target.value)}/>
            
                    <input placeholder="Descrição geral"
                    value={descricao}
                    onChange={e => setDescricao(e.target.value)}/>

                    <button className="button" type="submit">Adicionar</button>
                </form>
            </div>
        </div>
    );
}