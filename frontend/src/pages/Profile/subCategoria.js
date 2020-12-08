import React, {useState, useEffect} from 'react';
import {useHistory} from 'react-router-dom';
import {FiArrowLeft} from 'react-icons/fi';

import api from '../../services/api';


export default function SubCategoria(props){
  const [categoria, setCategoria] = useState([]);
  const cursoId = props.location.cursoId;
  const tipoCurso = props.location.tipoCurso;

const history = useHistory();
useEffect(() =>{
    api.get(`curso/${cursoId}`).then(Response =>{
        setCategoria(Response.data);
    })
},[]);

function handVoltar(){
   history.push('/inicial');
}

function handLicao(SubCategoriaId){
  if(tipoCurso.includes('verbo')){
    history.push({
      pathname: `/tempo/${SubCategoriaId}`,
      SubCategoriaId: SubCategoriaId
    })
  }
  else if(tipoCurso.includes('poema')){
    history.push({
      pathname: `/poema/${SubCategoriaId}`,
      SubCategoriaId: SubCategoriaId
    })
  }

}

return (
  <div className="profile-container">
    <header>
          <span>Escolher a lição</span>

          <button  onClick={handVoltar} type="button">
          <FiArrowLeft size={18} color= "#E02041"/>
          </button>
   </header>
   <h1>Lição sobre :</h1>
   <ul>
     {categoria.map(curso =>(
       <li key={curso.id} onClick={() => handLicao(curso.id)}>
          <p>{curso.descricao} em Francês</p>
       </li>
     ))}
   </ul>
  </div>       
);
}