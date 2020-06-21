import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Login from './pages/Login';
import Cadastro from './pages/Cadastro';
import EsqueceSenha from './pages/ResetarSenha';
import ValidarSenhaRecuperado from './pages/ResetarValidacao';
import NovoSenhaRecuperado from './pages/NovoSenha';



export default function Routes(){
  return(
    <BrowserRouter>
     <Switch>
      <Route path="/" exact component={Login}/>
      <Route path="/cadastro-cliente" component={Cadastro}/>
      <Route path="/esqueceu-senha" component={EsqueceSenha}/>
      <Route path="/validacao" component={ValidarSenhaRecuperado}/>
      <Route path="/nova-senha" component={NovoSenhaRecuperado}/>
     </Switch>
   </BrowserRouter>
 );
}