import React, {useState, useEffect} from 'react';
import {useHistory} from 'react-router-dom';
import {FiPower} from 'react-icons/fi';

import './styles.css';
import api from '../../services/api';



export default function Profile(){
const [cursos, setCurso] = useState([]);

const history = useHistory()
useEffect(() =>{
    api.get('inicio').then(Response =>{
        setCurso(Response.data);
    })
},[]);

function handLogout(){
    localStorage.clear();
    history.push('/');
}

function handCurso(cursoId){
    history.push({
        pathname: `/subcategoria-curso`,
        cursoId: cursoId
    });
}

return(
<div className="profile-container">
        <header>
            <span>Bem vinda</span>
            <button onClick={handLogout} type="button">
              <FiPower size={18} color= "#E02041"/>
            </button>
        </header>

        <h1>Curso da Lingua Francês</h1>
        <ul>
            {cursos.map(curso =>(
                <li key={curso.id} onClick={() => handCurso(curso.id, curso.tipoCurso)} >
                    <strong>Curso Sobre:</strong>
                    <p>{curso.tipoCurso}</p>
                </li>
            ))}
        </ul>
    </div>
);
}