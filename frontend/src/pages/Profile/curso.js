import React,{useState, useEffect} from 'react';
import {useHistory} from 'react-router-dom';
import {FiPower} from 'react-icons/fi';

import api from '../../services/api';


export default function Curso(){
   const [licao, setLicao] = useState([]);

   const history = useHistory();
   useEffect(() =>{
      api.get('iniciando-curso').then(Response =>{
          setLicao(Response.data);
      })
   });

   function handLogout(){
      localStorage.clear();
      history.push('/');
   }

   return(
     <div className="profile-container">
          <header>
               <span>Vamos aprender agora</span>
               <button onClick={handLogout} type="button">
                  <FiPower size={18} color="#E02041"/>
               </button>
          </header>
          <h1>Vamos estudar agora</h1>
          <ul>
             {licao.map(curso =>(
                <li key={curso.id}>
                     <p>{curso.material}</p>
                     <p>{curso.materialTraduizido}</p>
                </li>
              ))}
          </ul>
     </div>
   );
}