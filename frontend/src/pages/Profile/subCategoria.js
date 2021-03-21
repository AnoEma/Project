import React, {useState, useEffect} from 'react';
import {useHistory} from 'react-router-dom';
import {FiArrowLeft, FiPlus} from 'react-icons/fi';

import api from '../../services/api';
import './styles.css';


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

function handAddSub(){
  history.push({
    pathname: 'adicionar-subcategoria',
    cursoId: cursoId,
    tipoCurso: tipoCurso
  })
}

function handLicao(SubCategoriaId, descricao){
  switch(tipoCurso){
    case 'Verbo':
     return history.push({
        pathname: `/tempo/${SubCategoriaId}`,
        SubCategoriaId: SubCategoriaId,
        descricao:descricao,
        cursoId: cursoId
      });
      break;
    case 'Poema':
      return  history.push({
        pathname: `/poema/${SubCategoriaId}`,
        SubCategoriaId: SubCategoriaId,
        descricao:descricao,
        cursoId: cursoId
      });
      break;
  }
}

return (
  <div className="profile-container">
    <header>
          <span>Escolher a lição</span>
          <button className="buton" onClick={handAddSub} type="button">
                <FiPlus size={18} color="#E02041"/>
          </button>
          <button className="button"  onClick={handVoltar} type="button">
          <FiArrowLeft size={18} color= "#E02041"/>
          </button>
   </header>
   <h1>Lição sobre :</h1>
   <ul>
     {categoria.map(curso =>(
       <li key={curso.id} onClick={() => handLicao(curso.id, curso.descricao)}>
          <p>{curso.descricao}</p>
          <span>{curso.descricaoMaterial} em Francês</span>
       </li>
     ))}
   </ul>
  </div>       
);
}