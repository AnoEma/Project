import React,{useState, useEffect} from 'react';
import {useHistory} from 'react-router-dom';
import {FiArrowLeft, FiPlayCircle} from 'react-icons/fi';

import api from '../../../services/api';

export default function Poemas(props){
    const [poema, setPoema] = useState([]);

    const history = useHistory();
    const poemaId = props.location.SubCategoriaId; 
    const cursoId = props.location.cursoId   

    useEffect(() =>{
       try {
          api.get(`poema/${poemaId}`).then(Response =>{
            setPoema(Response.data);
          })       
       } catch (error) {
         alert("Não funcionou carai");     
       }
    },[]);



    function handVoltar(poemaId){
      history.push({
        pathname: `/subcategoria-curso`,
        cursoId: cursoId,
        tipoCurso:'poema'
      });
    }

    return(
      <div className="profile-container">
        <header>
           <span>Viva a Poema</span>
            <button  onClick={()=>handVoltar(poema.map(a => a.poemaId))} type="button">
               <FiArrowLeft size={18} color="#E02041"/>
            </button>
        </header>
          <h1>Poema sobre: {poema.map(a => a.descricao)}</h1>
           <ul>
            {poema.map(arte =>(
              <li key={arte.id}>
               <p>{arte.poemaMaterial} <FiPlayCircle size={14}/></p>
               <p>{arte.poemaMaterialTraduizido}</p>
              </li>
            ))}
           </ul>
     </div>
   );
}