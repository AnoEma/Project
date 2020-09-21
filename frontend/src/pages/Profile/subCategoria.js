import React, {useState, useEffect} from 'react';
import {useHistory} from 'react-router-dom';
import {FiPower} from 'react-icons/fi';

import api from '../../services/api';


export default function SubCategoria(){
  const [categoria, setCategoria] = useState([]);

const history = useHistory();
useEffect(() =>{
    api.get('curso').then(Response =>{
        setCategoria(Response.data);
    })
});

function handLogout(){
   localStorage.clear();
   history.push('/');
}

function handLicao(subCategoriaId){
history.push(`/licao/${subCategoriaId}`);
}

return (
  <div className="profile-container">
    <header>
          <span>Escolher a lição</span>
          <button  onClick={handLogout} type="button">
          <FiPower size={18} color= "#E02041"/>
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