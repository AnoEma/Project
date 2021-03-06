import React, {useState, useEffect} from 'react';
import {useHistory} from 'react-router-dom';
import {FiArrowLeft} from 'react-icons/fi';

import api from '../../services/api';

export default function Tempo(props){
   const [tempo, setTempo] = useState([]);

  const history = useHistory();
  const verboId = props.location.SubCategoriaId;

   useEffect(() =>{
      try {        
           api.get(`tempo-verbo/${verboId}`)
              .then(Response =>{
              setTempo(Response.data);
            });
          } 
      catch (error) {
          alert("Não deu certoooo!")
          }      
   }, []);

     function handVoltar(){
          history.push('/subcategoria-curso');     
      }

   return(
          <div className="profile-container">
               <header>
                    <span>Tempo de verbo</span>
                    <button  onClick={handVoltar} type="button">
                       <FiArrowLeft size={18} color="#E02041"/>
                    </button>
               </header>
               <h1>Escolhe o tempo</h1>
               <ul>
                    {tempo.map(tempinho =>(
                        <li key={tempinho.id}>
                        <p>{tempinho.tempo}</p>
                        <p>{tempinho.tempoTraduizido}</p>
                   </li>
                    ))}
               </ul>
          </div>
        ); 
}