import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Login from './pages/Login';
import Cadastro from './pages/Cadastro';
import EsqueceSenha from './pages/ResetarSenha';
import ValidarSenhaRecuperado from './pages/ResetarValidacao';
import NovoSenhaRecuperado from './pages/NovoSenha';
import Profile from './pages/Profile';
import ValidacaoCadastro from './pages/ResetarValidacao/validacaoCadastro';
import subcategoria from './pages/Profile/subCategoria';
import Curso from './pages/Profile/curso';
import Tempo from './pages/Profile/tempo';
import Poema from './pages/Profile/poema/poema';
import PaginaInicial from './pages/Inicial/index';




export default function Routes(){
  return(
    <BrowserRouter>
     <Switch>
       <Route path="/" exact component={PaginaInicial}/>
      <Route path="/login"  component={Login}/>
      <Route path="/cadastro-cliente" component={Cadastro}/>
      <Route path="/esqueceu-senha" component={EsqueceSenha}/>
      <Route path="/validacao" component={ValidarSenhaRecuperado}/>
      <Route path="/nova-senha" component={NovoSenhaRecuperado}/>
      <Route path="/inicial" component={Profile}/>
      <Route path="/subcategoria-curso" component={subcategoria}/>
      <Route path="/validar-cadastro" component={ValidacaoCadastro}/>
      <Route path="/licao" component={Curso}/>
      <Route path="/tempo/:SubCategoriaId" component={Tempo}/>
      <Route path="/poema/:SubCategoriaId" component={Poema}/>
     </Switch>
   </BrowserRouter>
 );
}