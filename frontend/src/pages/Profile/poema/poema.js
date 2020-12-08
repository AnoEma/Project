import React,{useState, useEffect} from 'react';
import {useHistory} from 'react-router-dom';
import {FiArrowLeft} from 'react-icons/fi';

import api from '../../../services/api';

export default function Poemas(props){
    const [poema, setPoema] = useState([]);

    const history = useHistory();
    const poemaId = props.location.SubCategoriaId;    

    useEffect(() =>{
       try {
          api.get(`poema/${poemaId}`).then(Response =>{
            setPoema(Response.data);
          })       
       } catch (error) {
         alert("Não funcionou carai");     
       }
    },[]);



    function handVoltar(){
      history.push('/subcatergoria-curso');
    }

    return(
      <div className="profile-container">
        <header>
           <span>Viva a Poema</span>
            <button  onClick={handVoltar} type="button">
               <FiArrowLeft size={18} color="#E02041"/>
            </button>
        </header>
          <h1>Poema sobre: {poema.map(a => a.descricao)}</h1>
           <ul>
            {poema.map(arte =>(
              <li key={arte.id}>
               <p>{arte.poemaMaterial}</p>
               <p>{arte.poemaMaterialTraduizido}</p>
              </li>
            ))}
           </ul>
     </div>
   );
}