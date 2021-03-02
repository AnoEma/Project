import React,{useState, useEffect} from 'react';
import {Link, useHistory} from 'react-router-dom';
import {FiPower, FiArrowLeft, FiPlayCircle} from 'react-icons/fi';

import api from '../../services/api';


export default function Curso(props){
   const [licao, setLicao] = useState([]);

   const history = useHistory();
   const subCategoriaId = props.location.subCategoriaId;
   
  useEffect(() =>{
   buscar();
  },[])

   function buscar() {
      try {        
             api.get(`iniciando/${subCategoriaId}`)
              .then(Response =>{
            setLicao(Response.data);
         });
      } 
      catch (error) {
         alert("Não deu certoooo!")
      }
   };

   function handLogout(){
      localStorage.clear();
      history.push('/login');
   }

   return(
     <div className="profile-container">
          <header>
               <span>Vamos aprender agora</span>
               <Link className="back-link" to="/subcategoria-curso">
                  <FiArrowLeft size={16} color="#E02041"/>
                   Volta na Pagina anterior
               </Link>
               <button onClick={handLogout} type="button">
                  <FiPower size={18} color="#E02041"/>
               </button>
          </header>
          <h1>Vamos estudar agora</h1>
          <ul>
               {licao.map(curso =>(
                   <li key={curso.id}>
                   <p>{curso.material} <FiPlayCircle size={14}/></p>
                   <p>{curso.materialTraduizido}</p>
              </li>
               ))}
          </ul>
     </div>
   );
}