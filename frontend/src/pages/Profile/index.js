import React, {useState, useEffect} from 'react';
import {useHistory} from 'react-router-dom';
import {FiPower, FiPlus} from 'react-icons/fi';

import './styles.css';
import api from '../../services/api';



export default function Profile(props){
const [cursos, setCurso] = useState([]);
const [inHover, setHover] = useState(false);
const usuario = props.location.email;

const history = useHistory()
useEffect(() =>{
    api.get('inicio').then(Response =>{
        setCurso(Response.data);
    })
    handUsuario(usuario);
},[]);

function handLogout(){
    localStorage.clear();
    history.push('/login');
}

function handCurso(cursoId, tipoCurso){
    history.push({
        pathname: `/subcategoria-curso`,
        cursoId: cursoId,
        tipoCurso: tipoCurso
    });
}

function handPlus(){
    history.push({
        pathname:'/adicionar-curso'
    });
}


function handUsuario(usuario){
    // try {
    //     api.post('usuario-logado', usuario).then(Response =>{Response.data});
    // } catch (error) {
    //     alert('teste');
    // }
}

return(
<div className="profile-container">
        <header>
            <span>Bem vinda</span>
            <button className="buton" onClick={handPlus} type="button">
                <FiPlus size={18} color="#E02041"/>
            </button>
            <button className="button" onClick={handLogout} type="button">
              <FiPower size={18} color= "#E02041"/>
            </button>
        </header>

        <h1>Curso da Lingua Francês</h1>
        <ul>
            {cursos.map(curso =>(
                <li key={curso.id} onClick={() => handCurso(curso.id, curso.tipoCurso)} 
                onMouseEnter={() =>setHover(true)}
                onMouseLeave={() => setHover(false)}>
                    <strong>Curso Sobre:</strong>
                    <p>{curso.tipoCurso}</p>
                    {/* {inHover &&<p>{curso.descricao}</p>} */}
                </li>
            ))}
        </ul>
    </div>
);
}