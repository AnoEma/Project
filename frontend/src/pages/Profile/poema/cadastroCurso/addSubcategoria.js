import React, { useState } from 'react';
import {Link, useHistory} from 'react-router-dom';

import api from '../../../../services/api';
import {FiArrowLeft} from 'react-icons/fi';


export default function AddSubcategoria(props){
    const [descricao, setDescricao] = useState('');
    const [descricaoMaterial, setDescricaoMaterial] = useState('');
    const history = useHistory();
    const cursoInicioId =  props.location.cursoId;
    const tipoCurso = props.location.tipoCurso;

    async function handAdicionarSubcategoria(e){
        e.preventDefault();

        try{
            const response = await api.post('/adicao-curso',{cursoInicioId, descricao, descricaoMaterial});

            if(response.statusText == "Created"){
                alert('Foi adicionando a subcategoria com sucesso.');
                history.push({
                    pathname:'/subcategoria-curso',
                    cursoId: cursoInicioId,
                    tipoCurso:tipoCurso
                });
            }
        }catch(err){
            alert('Ocorre erro ao adicionar');
        }
    }

    function Voltar(){
        history.push({
            pathname: `/subcategoria-curso`,
            cursoId: cursoInicioId,
            tipoCurso:tipoCurso
       }); 
    }

    return(
        <div className="globalstyle-container">
             <div className="content">
                 <section>
                     <h1>Adicionar tipo do curso</h1>
                     <span className="back-link" onClick={() => Voltar()}>
                        <FiArrowLeft size={20} color="#ffffff"/>
                            Volta na Pagina anterior
                        </span>
                 </section>
                <form onSubmit={handAdicionarSubcategoria}>
                    <input placeholder="Categoria"
                     value={descricao}
                     onChange={e => setDescricao(e.target.value)}
                     />
            
                    <input placeholder="Descrição"
                    value={descricaoMaterial}
                    onChange={e => setDescricaoMaterial(e.target.value)}
                    />

                    <button className="button" type="submit">Adicionar</button>
                </form>
            </div>
        </div>
    );
}